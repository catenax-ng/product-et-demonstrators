# Differential Privacy

## Introduction
Differential privacy is a set of techniques and mathematical guarantees that provide a strong level of privacy protection for the collected data, even if the information is implicit present in the dataset or not.

This technique allows organizations to collect and use data in a responsible and ethical way, without compromising the privacy of individuals. This concept is widely used in many fields such as healthcare, finance, and social media.

![Technology behavior diagram](../md-content/images/dp/differential-privacy-diagram.png "Technology behavior diagram")

## Technical Information
Differential privacy involves adding random noise to the data in a controlled manner. There are multiple techniques and methodologies for achieving the privacy that we will explore in this section.

1. Global differential privacy

   Provides privacy guarantees for aggregate information in a database, by applying mechanisms globally to the entire set.
2. Local Differential Privacy

   Local differential privacy (LDP) provides privacy guarantees for individual data items in a database. Privacy-preserving mechanisms are applied locally to each data item, rather than globally to the entire dataset.

   This can be explained by a simple example. Let's assume we have a data point. Now we throw a coin if we keep the original data point or not. Now, with 50% percent chance it might be that we decide to modify the original data point. If this would be the case, we throw another coin to decide if we actually modify the data point. So again, we have another 50% chance to change the data point. By this simple process, we have an 75% chance to keep the data point and 25% chance that we modify the data point. If we repeat this procedure for the whole data set, an adversary can never be sure, which data points are actually correct and which are not. This is visualized in the picture below.

   ![Structured noise addition example](../md-content/images/dp/differential-privacy-example.png "Structured noise addition example")
 
   However, strictly speaking, DP is not an anonymization method, but a mathematically provable promise of privacy in a dataset. More specifically, DP guarantees that an algorithm `M` is `(ε,δ)`-differentially private if for any neighboring datasets D and D' differing on at most one element (neighboring datasets) and any set of possible outputs `S` in `Range(M)`:
   
    ```
    Pr[M(D) in S] ≤ e^ε x Pr[M(D') in S] + δ
    ```
    with `ε` as the likeliness of finding individuals and δ as the possibility, by which outputs differ for different datasets.
Hence through differential privacy, an adversary will essentially get the same inference about any individual's private information, which makes the outputs "differentially" indistinguishable. This promise is mostly achieved by adding noise randomly sampled from a probability density function.

Differential Privacy is widely applicable and has also been presented to obfuscate the resulting update gradients of training deep neural networks. This extension to traditional neural networks is one possibility to counteract reverse-engineering of training data. Adding noise to data or updating gradients lowers the degree of information and therefore the utility. However, the amount of noise can be easily customized, which shifts the privacy-utility trade-off. Due to the easy adaptability and broad applicability, we expect DP to be a valuable technique for our project.


### Participant Roles
*Computer Scientist, Data analysis engineer*

### Building Blocks
Library or software to apply techniques to the information to share.

## Evaluation
In this section we will be comparing the performance of Differential Privacy solutions in protecting the data while still allowing for useful data analysis.

### Advantages
1.	Privacy protection: Differential privacy provides a strong guarantee of privacy keeping data anonymized.
2.	Transparency: Differential privacy allows for the release of data without revealing sensitive information about individuals.
3.	Flexibility: Differential privacy can be applied to a wide variety of data types and use cases.
4.	Comparability: Differential privacy allows for the comparison of data from different sources without compromising privacy.
5.	It allows the owners of the data to control the trade-off between privacy and utility of it.

### Drawbacks
1.	High computational cost: Differential privacy algorithms can be computationally expensive, which can make them impractical for large datasets.
2.	High noise: Differential privacy algorithms is based on adding noise to the data, which can make it difficult to obtain accurate results.
3.	Limited applicability: Differential privacy may not be suitable for all types of data or use cases, and its effectiveness can depend on the specific characteristics of the data and the specific algorithm used.

## Technological Readiness Level
5: differential privacy is still an emerging field, and there is ongoing research and development in this area. In some applications, there are strict regulations and privacy laws that require the use of it. 