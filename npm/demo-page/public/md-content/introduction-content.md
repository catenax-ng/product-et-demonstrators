## Privacy Tradeoff

Information in the correct hands could be beneficial, but used in the wrong way can encourage risks. There are some risks associated to the transfer (trade-off) of data, since we quickly lose control over the data. In this section we will introduce the most important issues related to the trade-off information.


### The Copy Problem

Sharing digital information is based on copying the data from its origin to the receiver. From this point there are two versions of the data, the original and the copied. The risk associated to this process is that we are losing control over the copied information. That means we are no longer aware of the use that the receivers will give to it. This copied version can be copied another time and we quickly lose control over the data.

Due the technical and legal limitations the sharing has to be agreed in order to enforce the preserve of the information. Nevertheless, some privacy-transparency measures should be applied to ensure the compliance of the legal limitations.


### The Bundling Problem
          
Other risks come hand in hand of which data is shared. Some data comes bundled, forcing to share non-intended data. For example, sharing medical data could include some patterns with other diseases.

Sharing information not required can become a problem for the owner. Since sensible information from its belonging is being shared and can be used for other purposes such as reverse engineering.


### The Recursive Enforcement Problem

A possible solution for the previous mentioned problems could be a third-party authority in charge of detect if the data is misused. Therefore, the responsible has to make sure the if the student misused the data. But as we mentioned in the Copy Problem, if the user copies the data to its own computer it will be able to anything with it.

So, to avoid this problem, the supervisor must keep the data in its computer. But, who controls the supervisor? Because this responsible, with the data in its possession, can misuse it. This is the Recursive Enforcement problem.


## Privacy Risks

According to the surveys carried out during the initial stages of the Catena-X project, 35% of respondents recognise data privacy as one of the biggest obstacles for B2B data sharing (see graph, reference needed). This hints toward the fact that technical compatibility and sound business models alone are not sufficient for a sucessful data sharing ecosystem, while the existence of privacy guarantees can create incentives for new actors to actually take part in the marketplace.

![Privacy Risks](/md-content/images/privacy-risks.png "Privacy Risks")
          

But what does it mean for a data sharing ecosystem to offer privacy guarantees? In order to understand what privacy actually means, it helps to follow an antithetical approach and explain how a lack of privacy can affect Catena-X participants in practice. To that end, we explore in this paper some of the most obvious privacy risks, their root causes and how they can be prevented. In particular, we identify some risks that derive from the design of the Catena-X architecture and the type of the data being shared.

The EDC connector is, for instance, one of the main components in the ecosystem. Its main role is that of negotiating the terms of a contract between the data producer and the data consumer and making the data available. However, the connector lacks any capability to technically enforce the policies described in the contract. As a result, a data consumer might be liable in case of breaking the terms in the agreement but proving the mishandling of the data could be very difficult if not impossible. When such a situation occurs, unintended information about business internals can be revealed with PII illegally disclosed and/or misused or IP being leaked. In some other cases, even useful and well intended cooperation might unintentionally violate anti-trust laws.

While these risks are a result of data simply being shared, a new category of risks appears when the data consumer and producer agree to train machine learning models on existing data, allow to query a model for inference or share the complete trained models.

In the first case, the current architecture design does not foresees any mechanism to prevent an algorithm from running malicious computations and, unfortunately, only the auditing, vetting and signing of the code can help addressing this issue. Moreover, certain attacks are possible when a machine learning model is made available for inference, even if data is not accessible. For example, a malicious data consumer could perform a membership inference attack to determine if a particular individual is part of the dataset used to train the model. Furthermore, a model can be made available only for inference according to a contract. However, there exist techniques that would allow a data consumer to steal that model, incurring again in potential IP losses for the data provider.

Finally, the current Catena-X architecture design only considers encryption of the data in transfer. While the responsibility of keeping the data encrypted at rest lies with the participants and not the network, the lack of an encryption layer becomes a risk if data is made available through a third-party IaaS provider. As we will discuss in the following sections, Trusted Execution Environments can for example help mitigate this problem.

In summary, it is clear that many of these uncertainties with potential legal and economic consequences can be addressed through privacy mechanisms. In the following sections, we introduce the most relevant privacy enhancing technologies, discuss how they work and how they could be deployed as part of the Catena-X ecosystem.

## Privacy Attacks