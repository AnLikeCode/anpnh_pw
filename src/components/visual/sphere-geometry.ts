/**
 * Geometry for the Interactive Quantum Sphere.
 *
 * An abstract, Bloch-sphere-inspired drawing: a unit sphere with a few
 * latitude and meridian hairlines, the z axis with |0> and |1> poles, a state
 * vector |psi> at fixed polar/azimuthal angles, its precession circle and its
 * projection onto the equatorial plane. It is an artistic rendering, not a
 * physical simulation.
 *
 * Everything is computed with a simple orthographic projection, so the same
 * code produces the static SVG at build time (no-JS fallback) and the live
 * updates in the browser. Output is a handful of SVG path strings, which keeps
 * the DOM small (about 20 elements).
 */

export type Vec3 = [number, number, number];
export interface Orientation {
  yaw: number; // rotation around the sphere's vertical (z) axis, radians
  pitch: number; // tilt of the north pole toward the viewer, radians
}

export const R = 100;
export const VIEWBOX = '-150 -138 300 276';

/** Resting orientation: seen slightly from above, turned a little to the left. */
export const REST: Orientation = { yaw: -0.62, pitch: 0.36 };

/** Pointer interaction limits (radians). */
export const LIMITS = { yaw: 0.42, pitch: 0.2 };

/** The state vector, in Bloch-sphere angles. */
const THETA = 0.98; // polar angle from |0>
const PHI = 0.62; // azimuth

const SAMPLES = 120;
const LATITUDES = [-56, -28, 28, 56].map((d) => (d * Math.PI) / 180);
const MERIDIANS = [0, 30, 60, 90, 120, 150].map((d) => (d * Math.PI) / 180);

const r2 = (n: number) => Math.round(n * 100) / 100;

interface Projected {
  x: number;
  y: number;
  /** > 0 means the point faces the viewer. */
  depth: number;
}

export function project(p: Vec3, o: Orientation): Projected {
  const cy = Math.cos(o.yaw);
  const sy = Math.sin(o.yaw);
  const cp = Math.cos(o.pitch);
  const sp = Math.sin(o.pitch);
  // yaw about z
  const x1 = p[0] * cy - p[1] * sy;
  const y1 = p[0] * sy + p[1] * cy;
  const z1 = p[2];
  // pitch about the screen's horizontal axis
  const y2 = y1 * cp - z1 * sp;
  const z2 = y1 * sp + z1 * cp;
  // viewer looks along +y, screen y grows downward
  return { x: x1, y: -z2, depth: -y2 };
}

const pt = (q: Projected) => `${r2(q.x)} ${r2(q.y)}`;

/**
 * Split a 3D polyline into the parts in front of and behind the sphere's
 * silhouette, returning SVG path data for each.
 */
function splitCurve(points: Vec3[], o: Orientation, closed: boolean) {
  const proj = points.map((p) => project(p, o));
  if (closed) proj.push(proj[0]!);
  let front = '';
  let back = '';
  let run: Projected[] = [];
  let runFront = proj[0]!.depth >= -0.001;

  const flush = () => {
    if (run.length < 2) return;
    const d = `M${run.map(pt).join('L')}`;
    if (runFront) front += d;
    else back += d;
  };

  for (let i = 0; i < proj.length; i++) {
    const q = proj[i]!;
    const isFront = q.depth >= -0.001;
    if (isFront !== runFront) {
      run.push(q); // share the boundary point so segments touch
      flush();
      run = [q];
      runFront = isFront;
    } else {
      run.push(q);
    }
  }
  flush();
  return { front, back };
}

function circle(fn: (t: number) => Vec3): Vec3[] {
  const out: Vec3[] = [];
  for (let i = 0; i < SAMPLES; i++) out.push(fn((i / SAMPLES) * Math.PI * 2));
  return out;
}

function arc(fn: (t: number) => Vec3, from: number, to: number, n = 40): Vec3[] {
  const out: Vec3[] = [];
  for (let i = 0; i <= n; i++) out.push(fn(from + ((to - from) * i) / n));
  return out;
}

const stateDir: Vec3 = [Math.sin(THETA) * Math.cos(PHI), Math.sin(THETA) * Math.sin(PHI), Math.cos(THETA)];

export interface Scene {
  gridFront: string;
  gridBack: string;
  equatorFront: string;
  equatorBack: string;
  precessionFront: string;
  precessionBack: string;
  axisFront: string;
  axisBack: string;
  planeAxes: string;
  projection: string;
  phiArc: string;
  thetaArc: string;
  vector: string;
  vectorBehind: boolean;
  tip: { x: number; y: number };
  labels: { zero: { x: number; y: number }; one: { x: number; y: number }; psi: { x: number; y: number } };
}

export function buildScene(o: Orientation): Scene {
  let gridFront = '';
  let gridBack = '';

  for (const lat of LATITUDES) {
    const z = Math.sin(lat);
    const rr = Math.cos(lat);
    const c = splitCurve(
      circle((t) => [R * rr * Math.cos(t), R * rr * Math.sin(t), R * z]),
      o,
      true,
    );
    gridFront += c.front;
    gridBack += c.back;
  }

  for (const lon of MERIDIANS) {
    const c = splitCurve(
      circle((t) => [R * Math.sin(t) * Math.cos(lon), R * Math.sin(t) * Math.sin(lon), R * Math.cos(t)]),
      o,
      true,
    );
    gridFront += c.front;
    gridBack += c.back;
  }

  const eq = splitCurve(
    circle((t) => [R * Math.cos(t), R * Math.sin(t), 0]),
    o,
    true,
  );

  const pz = Math.cos(THETA);
  const pr = Math.sin(THETA);
  const prec = splitCurve(
    circle((t) => [R * pr * Math.cos(t), R * pr * Math.sin(t), R * pz]),
    o,
    true,
  );

  // z axis, slightly longer than the sphere
  const ext = 1.16;
  const axis = splitCurve(
    arc((t) => [0, 0, R * t], -ext, ext, 2),
    o,
    false,
  );

  // x and y axes, inside the sphere only, very faint
  const center = project([0, 0, 0], o);
  const planeAxes = [
    [R, 0, 0],
    [-R, 0, 0],
    [0, R, 0],
    [0, -R, 0],
  ]
    .map((p) => `M${pt(center)}L${pt(project(p as Vec3, o))}`)
    .join('');

  const tip3: Vec3 = [R * stateDir[0], R * stateDir[1], R * stateDir[2]];
  const foot3: Vec3 = [tip3[0], tip3[1], 0];
  const tip = project(tip3, o);
  const foot = project(foot3, o);

  const projection = `M${pt(tip)}L${pt(foot)}M${pt(center)}L${pt(foot)}`;

  const phiArc = `M${arc((t) => [0.3 * R * Math.cos(t), 0.3 * R * Math.sin(t), 0], 0, PHI, 24)
    .map((p) => pt(project(p, o)))
    .join('L')}`;

  const thetaArc = `M${arc(
    (t) => [0.34 * R * Math.sin(t) * Math.cos(PHI), 0.34 * R * Math.sin(t) * Math.sin(PHI), 0.34 * R * Math.cos(t)],
    0,
    THETA,
    28,
  )
    .map((p) => pt(project(p, o)))
    .join('L')}`;

  const psi3: Vec3 = [tip3[0] * 1.17, tip3[1] * 1.17, tip3[2] * 1.17];
  const zero = project([0, 0, R * 1.3], o);
  const one = project([0, 0, -R * 1.3], o);
  const psi = project(psi3, o);

  return {
    gridFront,
    gridBack,
    equatorFront: eq.front,
    equatorBack: eq.back,
    precessionFront: prec.front,
    precessionBack: prec.back,
    axisFront: axis.front,
    axisBack: axis.back,
    planeAxes,
    projection,
    phiArc,
    thetaArc,
    vector: `M${pt(center)}L${pt(tip)}`,
    vectorBehind: tip.depth < 0,
    tip: { x: r2(tip.x), y: r2(tip.y) },
    labels: {
      zero: { x: r2(zero.x), y: r2(zero.y) },
      one: { x: r2(one.x), y: r2(one.y) },
      psi: { x: r2(psi.x), y: r2(psi.y) },
    },
  };
}
