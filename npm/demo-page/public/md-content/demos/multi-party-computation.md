# Secure Multi-Party Computation

Secure Multiparty Computation (also known as MPC or sMPC) is a cryptographic technique that enables different parties to carry out computations on private data without ever revealing the private data to each other.

To this end the private data are utilized using a cryptographic secret sharing algorithm. A secret sharing algorithm enables “splitting” a secret into multiple shares such that no unqualified set of shares can reveal any information about the secret, but any qualified set can be used to reconstruct the secret.  

The computation itself is carried out on the secret shares between distributed computing nodes that engage in a protocol. Therefore, each computing node receives its own share of the secret input data. After the protocol is executed correctly the result of the computation can be reconstructed combining the result shares. Idealy the functionality provided by the set of computing nodes equals the functionality of a trusted third party.

Whereas distributed computing deals with the threat of machine crashes and other inadvertent faults, secure multiparty computation is concerned with the possibility of deliberately malicious behavior by some adversarial entity (these have also been considered in the distributed literature where they are called Byzantine faults). That is, it is assumed that a protocol execution may come under “attack” by an external entity, or even by a subset of the participating parties. The aim of this attack may be to learn private information or cause the result of the computation to be incorrect. Thus, two important requirements on any secure computation protocol are privacy and correctness.

- **Privacy:** Parties should only learn their respective output and nothing else. Specifically, no party can infer information about private inputs from the result.
- **Correctness:** An adversarial party must not be able to prevent other parties from receiving their correct result.

## What are the advantages of MPC?
- **Utilize private data:** MPC can eliminate the tradeoff between data privacy and data utility since no private data must be shared with any third party to be utilized. In that vein, it also addresses the risk of data breaches and data misuse.
- **Privacy by design:** MPC only reveals the final result and does not reveal any intermediate information during the computation. Therefore, security provided by MPC is higher compared to e.g., federated learning. Privacy and security guarantees of MPC are cryptographically proven.
- **Practicality:** While other cryptographic privacy enhancing technologies, such as homomorphic encryption, are still a rather academic topic MPC matured to industry readiness over the past years. There exist industry ready software stacks for hosting MPC computing nodes as cloud native service. 

## What are the disadvantages of MPC?
- **Communication overhead:** MPC requires extensive communication not just to input the secret shared data but also to carry out the computation between the computing nodes. While the computation itself can be optimized be so called offline precomputation between the computing nodes the communication overhead scales especially in the number of computing nodes. Therefore, it is recommended to keep the number of computing nodes low.
- **Coalition resistance:** depending on the security level that is achieved MPC requires a minimum of honest, thus uncorrupted, computing nodes to achieve security. In practice, this means parties that provide their secret shared data should always trust at least one of the computing nodes to not maliciously collaborate with the others. 

## Technology Readiness
tbd

## Example for MPC application

The first practical application of MPC was in the year 2009 to implement a private  bid auction house for the Danish sugar beet market \[1\]. Clearly, the bids and asks submitted to the auction house reveal information about the traders economic position which should not be leaked to other market participants. To this end it must be ensured that all private information submitted to the auction house should be kept secret. In particular, this means that the operators of the auction house, who are potential market participants on their own, should not learn any private information. As a soloution the autcion house is implemented as a MPC protocol between three computing nodes, such that at least one of the computing nodes can be assumed to be trustworthy for each market participant. To execute the auction each participant has to split its respective bids and asks into shares submitting one share to each of the computing nodes. Once, the computing nodes received shares from each participant they can execute the market clearing MPC protocol. At the end of the protocol each of the computing nodes obtains a share of the result which is the cleared market. The result is reconstructed and published to announce the result of the auction. Since the result is generated using MPC it can be assumed to be correct, therefore it can be settled.   

### References
\[1\] Bogetoft, Peter, et al. "Secure multiparty computation goes live." International Conference on Financial Cryptography and Data Security. Springer, Berlin, Heidelberg, 2009.
