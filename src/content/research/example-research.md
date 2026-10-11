---
# =====================================================================
# EXAMPLE RESEARCH ENTRY (delete or replace)
# File name = URL: this page lives at /research/example-research/
# Required: title, date, kind, status, summary.
# kind:   journal | conference | preprint | ongoing | independent | collaborative | software | thesis
# status: published | preprint | under-review | ongoing | completed
# =====================================================================
title: "Example entry: a preprint with every section filled in"
date: 2026-09-14
kind: preprint
status: preprint
category: Quantum machine learning
summary: A template showing how a research page is structured. Replace this summary with two sentences describing the problem and what the work contributes.
abstract: >-
  This abstract is placeholder text. A real abstract states the problem, the approach, and the main
  findings in one paragraph. Write it exactly as in the paper or preprint. Inline mathematics such
  as $\mathcal{O}(\log n)$ is supported here too.
authors:
  - Your Name
  - Co-author Name
  - First Supervisor Name
venue: arXiv preprint # optional
role: Lead author. Designed the method and ran the experiments. # optional
tags: [variational algorithms, kernels]
links:
  - label: arXiv
    url: https://arxiv.org/
  - label: PDF
    url: https://example.org/paper.pdf
  - label: Code
    url: https://github.com/
bibtex: |
  @article{yourname2026example,
    title   = {Example entry: a preprint with every section filled in},
    author  = {Name, Your and Name, Co-author and Name, First Supervisor},
    journal = {arXiv preprint arXiv:0000.00000},
    year    = {2026}
  }
featured: true
draft: false
sample: true
---

## Research problem

State the question in one or two short paragraphs. What is not yet understood, and why does it matter? This section is placeholder text that shows the typography of a research page.

## Motivation

Explain what led you here: a gap in the literature, a practical need, a curious observation. Link to related work, for example [an arXiv listing](https://arxiv.org/).

## Approach

Equations can be written inline, like the state $\lvert\psi(\boldsymbol\theta)\rangle = U(\boldsymbol\theta)\lvert 0\rangle^{\otimes n}$, or as display mathematics:

$$
C(\boldsymbol\theta) = \langle \psi(\boldsymbol\theta) \rvert \, H \, \lvert \psi(\boldsymbol\theta) \rangle,
\qquad
\partial_{\theta_k} C = \tfrac{1}{2}\left[ C\!\left(\boldsymbol\theta + \tfrac{\pi}{2}\mathbf{e}_k\right) - C\!\left(\boldsymbol\theta - \tfrac{\pi}{2}\mathbf{e}_k\right) \right].
$$

Code blocks are highlighted automatically:

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)  # prepare a Bell state
qc.measure_all()
```

## Contributions

1. First contribution, stated as a single sentence.
2. Second contribution.
3. Third contribution.

## Results

Tables work as expected. The values below are placeholders, not results.

| Setting | Qubits | Metric A | Metric B |
| --- | --- | --- | --- |
| Baseline | 4 | value | value |
| Proposed | 4 | value | value |
| Proposed | 8 | value | value |

Figures use the image title as caption:

![Chalkboard in an empty lecture hall](/images/memories/chalkboard.jpg "Figure 1. Placeholder figure. Put your own figures in public/images/research/ and reference them like this.")

## Related resources

- Slides, posters or recorded talks.
- Datasets or supplementary material.
