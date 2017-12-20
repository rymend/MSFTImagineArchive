![](Images/header.png)

You are the leader of a group of climate scientists who are concerned about the dwindling polar-bear population in the Arctic. As such, your team has placed hundreds of cameras at strategic locations throughout the region and configured them to take pictures when they sense movement. Rather than manually examine each photograph to determine whether it contains a polar bear, you have been challenged to devise an automated system that processes data from these cameras in real time and displays an alert on a map when a polar bear is photographed. You need a solution that incorporates real-time stream processing to analyze raw data for potential sightings, and one that incorporates artificial intelligence (AI) and machine learning to determine with a high degree of accuracy whether a photo contains a polar bear. And you need it fast, because climate change won't wait.

In a series of four hands-on labs, you will build such a system using [Microsoft Azure](https://azure.microsoft.com/) and [Microsoft Cognitive Services](https://azure.microsoft.com/services/cognitive-services/). Specifically, you will use an [Azure Iot hub](https://azure.microsoft.com/services/iot-hub/) to ingest streaming data from simulated cameras, [Azure Storage](https://azure.microsoft.com/services/storage/?v=16.50) to store photographs, [Azure Stream Analytics](https://azure.microsoft.com/services/stream-analytics/) to process real-time data streams, Microsoft's [Custom Vision Service](https://azure.microsoft.com/services/cognitive-services/custom-vision-service/) to analyze photographs for polar pears, and [Microsoft Power BI](https://powerbi.microsoft.com/) to build a real-time dashboard for visualizing results.

In this lab, you will create a storage account and an IoT hub and connect them to an app that simulates a camera array. That app will be written in [Node.js](https://nodejs.org/) so it can run on any platform.

![](Images/road-map-1.png)

<a name="Objectives"></a>
### Objectives ###

In this hands-on lab, you will learn how to:

- Create an Azure storage account
- Create an Azure IoT hub
- Make authenticated calls to an Azure IoT hub
- Upload images to Azure blob storage from an app or device

<a name="Prerequisites"></a>
### Prerequisites ###

The following are required to complete this hands-on lab:

- An active Microsoft Azure subscription. If you don't have one, [sign up for a free trial](http://aka.ms/WATK-FreeTrial).
- The [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli)
- [Node.js](https://nodejs.org/)

---

<a name="Exercises"></a>
## Exercises ##

This hands-on lab includes the following exercises:

- [Exercise 1: Create a storage account](#Exercise1)
- [Exercise 2: Create an IoT hub](#Exercise2)
- [Exercise 3: Deploy a simulated camera array](#Exercise3)

Estimated time to complete this lab: **30** minutes.

<a name="Exercise1"></a>
## Exercise 1: Create a storage account ##

In this exercise, you will use the Azure CLI to create an Azure storage account in the cloud. This storage account will store as blobs photographs taken by the simulated cameras that you will deploy. Note that you can also create storage accounts using the [Azure Portal](https://portal.azure.com). Whether to use the CLI or the portal is often a matter of personal preference.

1. If the Azure CLI 2.0 isn't installed on your computer, go to https://docs.microsoft.com/cli/azure/install-azure-cli and install it now. You can determine whether the CLI is installed — and what version is installed — by opening a Command Prompt or terminal window and typing the following command:

	```
	az -v
	```

	If the CLI is installed, the version number will be displayed. If the version number is less than 2.0.19, download and install the latest version.

1. The next task is to create a resource group to hold the storage account and other Azure resources that you will create in this lab. Execute the following command in a Command Prompt window or terminal window to create a resource group named "streaminglab-rg" in Azure's South Central US region:

	```
	az group create --name streaminglab-rg --location southcentralus
	```

	> If the CLI responds by saying you must log in to execute this command, type ```az login``` and follow the instructions on the screen to log in to the CLI. In addition, if you have multiple Azure subscriptions, follow the instructions at https://docs.microsoft.com/cli/azure/manage-azure-subscriptions-azure-cli to set the active subscription — the one that the resources you create with the CLI will be billed to.

1. Now use the following command to create a general-purpose storage account in the "streaminglab-rg" resource group. Replace ACCOUNT_NAME with the name you wish to assign the storage account. The account name must be unique within Azure, so if the command fails because the storage-account name is already in use, change the name and try again. In addition, storage-account names must be from 3 to 24 characters in length and can contain only numbers and lowercase letters.

	```
	az storage account create --name ACCOUNT_NAME --resource-group streaminglab-rg --location southcentralus --kind Storage --sku Standard_LRS
	```

1. Before you can uploads blobs to a storage account, you must create a container to store them in. Use the following command to create a container named "photos" in the storage account, replacing ACCOUNT_NAME with the name you assigned to the storage account in the previous step:

	```
	az storage container create --name photos --account-name ACCOUNT_NAME
	```

You now have a storage account for storing photos taken by your simulated cameras, and a container to store them in. Now let's create an IoT hub to receive events transmitted by the cameras.

<a name="Exercise2"></a>
## Exercise 2: Create an IoT hub ##

Azure Stream Analytics supports several types of input, including input from [Azure IoT hubs](https://azure.microsoft.com/services/iot-hub/). In the IoT world, data is easily transmitted to IoT hubs through field gateways (for devices that are not IP-capable) or cloud gateways (for devices that *are* IP-capable), and a single Azure IoT hub can handle millions of events per second transmitted from devices spread throughout the world. IoT hubs also support two-way communication with the devices connected to them, permitting messages to be transmitted back to the devices.

In this exercise, you will create an Azure IoT hub to receive input from a simulated camera array and configure it to so that it can be accessed securely by IoT devices. In [Part 2](#), you will use the IoT hub to provide input to a Stream Analytics job.

1. Use the following command to create an IoT Hub in the same region as the storage account you created in the previous exercise and place it in the "streaminglab-rg" resource group. Replace HUB_NAME with a IoT hub name, which must be unique across Azure.

	```
	az iot hub create --name HUB_NAME --resource-group streaminglab-rg --location southcentralus --sku F1 
	```

	> The ```--sku F1``` parameter configures the IoT hub to use the free F1 pricing tier, which supports up to 8,000 events per day. However, Azure subscriptions are limited to one free IoT hub each. If the command fails because you have already created a free IoT hub, specify ```--sku S1``` instead. The S1 tier greatly expands the message-per-day limit, but is not free.

1. tk.

	```
	az iot hub
	```

1. tk.

	```
	az iot hub
	```

1. tk.

	```
	az iot hub
	```

1. tk.

	![tk](Images/tk.png)

	_tk_

TODO: Add closing.

<a name="Exercise3"></a>
## Exercise 3: Deploy a simulated camera array ##

TODO: Add introduction.

1. tk.

	![tk](Images/tk.png)

	_tk_

1. tk.

	![tk](Images/tk.png)

	_tk_

1. tk.

	![tk](Images/tk.png)

	_tk_

1. tk.

	![tk](Images/tk.png)

	_tk_

1. tk.

	![tk](Images/tk.png)

	_tk_

TODO: Add closing.

<a name="Summary"></a>
## Summary ##

TODO: Add summary.

---

Copyright 2017 Microsoft Corporation. All rights reserved. Except where otherwise noted, these materials are licensed under the terms of the MIT License. You may use them according to the license as is most appropriate for your project. The terms of this license can be found at https://opensource.org/licenses/MIT.
