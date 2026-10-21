---
title: "Simplifying the Design of the Oracle in Grover's Search Algorithm"
date: 2026-10-21
description: "Two intuitive approaches to designing a phase-flipping Oracle in Grover's search algorithm: using an ancilla qubit with phase kickback, and using a multi-controlled-Z gate across n qubits."
tags: [quantum computing, grover algorithm, quantum oracle, qiskit]
featured: true
draft: false
sample: false
---

In the most general sense, Grover's algorithm allows us to perform search in an unstructured database with a complexity of only $\mathcal{O}(\sqrt{N})$ instead of $\mathcal{O}(N)$ as in the classical approach.

The oracle, simply put, is a set of operators applied to the quantum circuit with the purpose of marking the quantum state we want to find. For example, consider the list `[7, 5, 6, 1, 8, 12, 0]`. With the classical approach, we only need to declare a variable `x = 5`. However, in quantum computing, we must design an oracle, which enables us to mark the state containing the number `5` that we wish to find.

In my learning experience with Grover's algorithm, there are two ways to design the Oracle that I find simple and easy to understand. Both are based on the idea of flipping the sign of the amplitude of the target state.

For illustration, suppose the number of bits I consider is $3$, then the search space is $[0, 7]$ or $[000, 001, \dots, 111]$. This is correspondingly represented in a simple way as a qubit string as follows:

$$
|\phi\rangle = \frac{1}{\sqrt{8}} \Big( |000\rangle + |001\rangle + |010\rangle + |011\rangle + |100\rangle + |101\rangle + |110\rangle + |111\rangle \Big)
$$

I define my Oracle as operator $O$. I then want to mark the state $|001\rangle$, meaning this is the state I need to find! Applying operator $O$ to our quantum circuit is expressed as follows:

$$
|\phi\rangle = \frac{1}{\sqrt{8}} \Big( |000\rangle - |001\rangle + |010\rangle + |011\rangle + |100\rangle + |101\rangle + |110\rangle + |111\rangle \Big)
$$

We can also mark more than one quantum state if those are the answers we need to find; the idea is the same.

In this discussion, I focus on the core idea behind the two design methods mentioned above. The detailed concepts are presented below:

## 1. Using an additional auxiliary qubit (also called an ancilla)

This design uses $n$ qubits to represent the state space information and introduces one additional qubit, called the ancilla. At this point, our quantum circuit has $n + 1$ qubits.

The main idea here is to leverage what is called **phase kickback**. Read further to understand what phase kickback is!

- The ancilla qubit, the $(n + 1)$-th qubit, is initialized in state $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$.
- The remaining $n$ qubits are denoted as $|x\rangle$.
- Thus, the entire quantum circuit is represented as: $|x\rangle|-\rangle$.

Our Oracle is essentially a multi-controlled-X gate (abbreviated as $\text{MCX}$), where $|x\rangle$ acts as the control qubits and the ancilla $|-\rangle$ is the target qubit.

The multi-controlled-X gate operates such that when all control qubits are $1$, an $X$ gate is applied to the target qubit. For instance, if we have four qubits $|x\rangle$ and one ancilla qubit $|-\rangle$, then when $|x\rangle = |1111\rangle$, the $X$ gate is applied to $|-\rangle$, becoming $X|-\rangle$, which is equivalent to $-|-\rangle$. In other cases, such as $|x\rangle = |1101\rangle$, the $X$ gate is not applied, and the ancilla qubit remains unchanged.

Because when $|x\rangle = |1111\rangle$ the $X$ gate is applied to $|-\rangle$, it becomes $-|-\rangle$. But since the initial circuit state was $|x\rangle|-\rangle$, after applying $X$ it becomes $|x\rangle(-|-\rangle)$, which can be rewritten as $-|x\rangle|-\rangle$. Here, the minus sign has "moved" from the ancilla qubit to the $|x\rangle$ state, which is called **phase kickback**.

In the above example, we gradually obtained the negative sign we desired. However, at this stage, the negative sign only appears when $|x\rangle = |1111\rangle$.

**What if we want the negative sign to appear for other states, such as $|1011\rangle$?**

The answer is to apply an $X$ gate at the position of the zero bit to transform $|1011\rangle$ into $|1111\rangle$. Now we can introduce the negative sign, and afterward, we simply revert the state $|1111\rangle$ back to $|1011\rangle$ by applying another $X$ gate at the same position.

Thus, in the end, we obtain the desired state whose amplitude has been flipped from positive to negative!

## 2. Using only $n$ qubits

The design of the Oracle in this second approach is based on the $\text{CZ}$ gate (for two qubits) or the multi-controlled-Z gate for $n$ qubits (abbreviated as $\text{MCZ}$).

The multi-controlled-Z gate simply works as follows: when applied to $n$ qubits, the final state, where all qubits are $1$, has its amplitude flipped from positive to negative. For example, with $3$ qubits, we can represent states from $|000\rangle$ to $|111\rangle$, and only $|111\rangle$ is transformed into $-|111\rangle$, while all other states remain unaffected. Explicitly:

$$
|\phi\rangle = \frac{1}{\sqrt{8}} \Big( |000\rangle + |001\rangle + |010\rangle + |011\rangle + |100\rangle + |101\rangle + |110\rangle + |111\rangle \Big)
$$

After applying the multi-controlled-Z:

$$
|\phi\rangle = \frac{1}{\sqrt{8}} \Big( |000\rangle + |001\rangle + |010\rangle + |011\rangle + |100\rangle + |101\rangle + |110\rangle - |111\rangle \Big)
$$

Thus, our Oracle is simply the $\text{CZ}$ gate. However, we see that only the state $|111\rangle$ has its amplitude flipped. To mark other states, we can perform similar transformations as in the ancilla-based design.

In Qiskit, the relation is given as:

$$
\text{MCZ} \sim H \, (\text{MCX}) \, H
$$

This means applying a Hadamard gate to the target qubit before and after applying the multi-controlled-X gate produces the same effect as the $\text{MCZ}$ gate.

In summary, the two methods above are the most common approaches for designing an Oracle, which is used to mark the quantum state we need to find.

Thank you very much for taking the time to read this article.
