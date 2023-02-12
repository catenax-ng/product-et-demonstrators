## Privacy Risks

According to surveys carried out during the initial stages of the Catena-X project, 35% of respondents recognise data privacy as one of the biggest obstacles for B2B data sharing (see Fig. 1). This hints toward the fact that technical compatibility and sound business models alone are not sufficient for a sucessful data sharing ecosystem, while the existence of privacy guarantees can create incentives for new actors to actually take part in the marketplace.

![Privacy Risks blablabla](/md-content/images/privacy-risks.png "Fig. 1: Privacy Risks - Source: Bitkom 05/2022, Datenökonomie – Wo steht die deutsche Wirtschaft?")

But what does it mean for a data sharing ecosystem to offer privacy guarantees? In order to understand what privacy actually means, it helps to follow an antithetical approach and explain how a lack of privacy can affect Catena-X participants in practice. To that end, we explore in the following some of the most obvious privacy risks, their root causes and how they can be prevented. In particular, we identify some risks that derive from the design of the Catena-X architecture and the type of the data being shared.

### The Copy Problem

Sharing digital information is based on copying the data from its origin to the receiver. From this point there are two versions of the data, the original and the copied. If no additional measures are taken and only the data itself is copied, any privacy relevant metadata such as access control information or usage policies is lost. What is more, if the originator does not keep track of all the receivers it copied data to, changes to this metadata (e.g., an update of user consent) cannot be propagated, virtually failing the user's requirements and expectations regarding their data protection. 

### The Bundling Problem

In practice data is rarely atomic and comprising only a single piece of information. As a consequence of inflexible data structure, sharing such data not only discloses non-intended information but often without awareness, making it even harder to trace and control data usage.           

### The (Recursive) Enforcement Problem

Following the Gaia-X principles for data sharing in and between International Data Spaces, a key component is a dataspace connector, whose main role is that of negotiating the terms of a contract between the data producer and the data consumer and making the data available. However, the connector lacks any capability to technically enforce the policies described in the contract (note that guaranteed technical enforcement of policies is not possible due to the above copy problem). As a result, a data consumer might be liable in case of breaking the terms in the agreement but proving the mishandling of the data could be very difficult if not impossible. When such a situation occurs, unintended information about business internals can be revealed with PII illegally disclosed and/or misused or IP being leaked. In some other cases, even useful and well intended cooperation might unintentionally violate anti-trust laws. The current approach tries to mitigate this risk with legal contracts that every participant is required to accept and sign if they wish to share and receive data. 
<!-- todo: elaborate on the recursiveness -->

<!-- exclude because we don't offer solutions to the mentioned problems
While these risks are a result of data simply being shared, a new category of risks appears when the data consumer and producer agree to train machine learning models on existing data, allow to query a model for inference or share the complete trained models.

In the first case, the current architecture design does not foresees any mechanism to prevent an algorithm from running malicious computations and, unfortunately, only the auditing, vetting and signing of the code can help addressing this issue. Moreover, certain attacks are possible when a machine learning model is made available for inference, even if data is not accessible. For example, a malicious data consumer could perform a membership inference attack to determine if a particular individual is part of the dataset used to train the model. Furthermore, a model can be made available only for inference according to a contract. However, there exist techniques that would allow a data consumer to steal that model, incurring again in potential IP losses for the data provider. -->


## Privacy Tradeoff

Information in the correct hands can be beneficial, but in the wrong ones it can cause everything from financial to psychological harm. There are strong similarities to discussions about technology which can be both life-saving as well as life-threatening, depending on the intentions of the ones instrumentalizing it. Unfortunately, the only way to completely mitigate any privacy risks is by not sharing (generating) data at all, which also might not be desirable for various reasons. Hence, solution design for any data-driven use case will always imply a tradeoff between the privacy of data subjects and and the capabilities of the system. 

In short, the technologies presented on this page aim to address these problems modifying the data such that it still can be used, but no original data is shared (Differential Privacy), by completely eliminating the need to share the data by leveraging compute-to-data instead of data-to-compute (Federated Machine Learning), or by minimizing the potential of intentionally misusing data (Multi-Party Computation). Please refer to the respective sections for more details.