---
title: "On the geometry of variational quantum states"
date: 2026-08-20
description: A short reflection on how parameterised quantum circuits trace manifolds in Hilbert space, and why Riemannian gradient methods matter.
tags: [quantum computing, geometry, optimization]
featured: true
draft: false
sample: true
---

When we train parameterised quantum circuits, we often treat the optimization problem as if we were navigating Euclidean space. We compute partial derivatives with respect to gate angles, take a step along the negative gradient, and repeat:

$$
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta \nabla_{\boldsymbol{\theta}} \mathcal{L}(\boldsymbol{\theta}_t).
$$

Yet the state $\lvert\psi(\boldsymbol{\theta})\rangle$ does not live in $\mathbb{R}^d$. It lives in a complex projective Hilbert space $\mathbb{C}P^{2^n - 1}$, where distances are governed by the Fubini-Study metric:

$$
g_{ij}(\boldsymbol{\theta}) = \text{Re} \left[ \left\langle \partial_i \psi \middle| \partial_j \psi \right\rangle - \langle \partial_i \psi | \psi \rangle \langle \psi | \partial_j \psi \rangle \right].
$$

## The natural gradient perspective

The discrepancy between the parameter space and the state space is not merely aesthetic. In regions where the metric tensor $g(\boldsymbol{\theta})$ is ill-conditioned or nearly singular, standard coordinate descent can crawl slowly or diverge, even when the underlying quantum state requires only a minor adjustment.

By taking the metric into account, quantum natural gradient descent replaces the standard Euclidean step with:

$$
\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta \, g^+(\boldsymbol{\theta}_t) \, \nabla \mathcal{L}(\boldsymbol{\theta}_t),
$$

where $g^+$ denotes the Moore-Penrose pseudoinverse.

```python
import numpy as np

def quantum_natural_step(theta, grad, metric_tensor, lr=0.01, reg=1e-4):
    """Update parameters along the Riemannian natural gradient direction."""
    d = metric_tensor.shape[0]
    inv_metric = np.linalg.pinv(metric_tensor + reg * np.eye(d))
    natural_grad = inv_metric @ grad
    return theta - lr * natural_grad
```

## Practical trade-offs

In small-scale simulations, computing the full metric tensor is straightforward. On physical quantum hardware, however, measuring each entry of $g(\boldsymbol{\theta})$ requires additional circuit executions, typically scaling quadratically with the number of circuit parameters unless block-diagonal approximations are used.

Whether the faster convergence per epoch compensates for the measurement overhead remains an empirical question that depends sensitively on hardware noise and shot noise.

> "A mathematical framework should clarify where the true degrees of freedom reside, rather than obscuring them behind coordinates."

These notes reflect ongoing reading in geometric quantum mechanics and variational algorithms.
