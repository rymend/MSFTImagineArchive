!![](Images/header.png)

Image classification is a common task performed by machine-learning models. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nulla sit amet nibh finibus volutpat eget id augue. Nunc sit amet rutrum tellus. Proin et aliquet lacus. Donec dignissim, massa quis sagittis imperdiet, enim sem faucibus nibh, in gravida purus dolor non ligula. Maecenas auctor nisl eu felis gravida fermentum. Donec auctor ultrices aliquet. Donec lectus sem, aliquam a consectetur sit amet, ullamcorper eget felis. Fusce condimentum ut odio in pretium. Aliquam dapibus, orci non iaculis pharetra, magna odio mattis massa, sit amet condimentum leo metus ut orci. Etiam maximus nec leo id lobortis. Suspendisse quis est in arcu scelerisque mattis. Fusce a augue consequat lacus suscipit dictum.

Aliquam cursus odio lectus. Vestibulum vitae nisl at felis suscipit fringilla id at mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce in nunc maximus, feugiat nisi eget, aliquet magna. Donec eu venenatis mauris. Pellentesque id lobortis nulla, in gravida mauris. Nam ut libero diam. Vestibulum vitae tellus magna. Nam erat risus, rutrum non imperdiet quis, ullamcorper a turpis. Pellentesque diam nisi, vehicula at urna in, ullamcorper finibus purus. Etiam pretium, nisi id euismod fermentum, libero nibh sagittis tellus, non pellentesque erat metus sed dui. Duis cursus mauris quis tincidunt placerat. Integer sit amet ornare justo, pulvinar egestas nisi. Mauris eget sapien et nisi condimentum scelerisque sit amet quis arcu. 

Vivamus quis leo mi. Cras condimentum arcu ut ligula laoreet egestas. Sed vulputate sem accumsan tincidunt lacinia. Sed eu suscipit sapien, id posuere ligula. Vestibulum id nulla malesuada, fermentum dui in, ullamcorper ligula. Donec sagittis consequat tristique. Ut massa lacus, iaculis non porttitor vitae, volutpat sit amet mi. Pellentesque consequat nulla non tortor lacinia, et sodales nisi iaculis. Donec sollicitudin ut augue sed pellentesque. Nam aliquet ligula vitae mi dapibus cursus. Sed hendrerit in leo ut mollis. Aenean at dui et dolor ultricies egestas

![](Images/road-map-1.png)

<a name="Objectives"></a>
### Objectives ###

In this hands-on lab, you will learn how to:

- Use the Azure CLI to create an Azure SQL database
- Search the Web for images using Bing Image Search
- Write to a database using Python

<a name="Prerequisites"></a>
### Prerequisites ###

The following are required to complete this hands-on lab:

- An active Microsoft Azure subscription. If you don't have one, [sign up for a free trial](http://aka.ms/WATK-FreeTrial).
- The [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest) version 2.0.19 or higher
- [Azure Machine Learning Workbench](https://docs.microsoft.com/en-us/azure/machine-learning/preview/quickstart-installation)

---

<a name="Exercises"></a>
## Exercises ##

This hands-on lab includes the following exercises:

- [Exercise 1: Create an Azure SQL database](#Exercise1)
- [Exercise 2: Get a Bing Image Search API key](#Exercise2)
- [Exercise 3: Populate the database](#Exercise3)

Estimated time to complete this lab: **30** minutes.

<a name="Exercise1"></a>
## Exercise 1: Create an Azure SQL database ##

In this exercise, you will use the Azure CLI to create an Azure SQL database in the cloud. This database will ultimately serve as a source of data for a machine-learning model that performs image classification. Note that you can also create Azure SQL databases using the [Azure Portal](https://portal.azure.com). Whether to use the CLI or the portal is often a matter of personal preference.

1. If the Azure CLI 2.0 isn't installed on your computer, go to https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest and install it now. You can determine whether the CLI is installed — and what version is installed — by opening a Command Prompt or terminal window and typing the following command:

	```
	az -v
	```

	If the CLI is installed, the version number will be displayed.

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

<a name="Exercise2"></a>
## Exercise 2: Get a Bing Image Search API key ##

The [Bing Image Search API](https://azure.microsoft.com/services/cognitive-services/bing-image-search-api/) is part of the [Microsoft Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) suite of services and APIs for building intelligent applications. In [Exercise 3](#Exercise3), you will use the Bing Image Search API from a Python script to search the Web for images of paintings by famous artists. But in order to invoke the Bing Image Search API, you need an API key. In this exercise, you will use the Azure Portal to acquire an API key.

1. Open the [Azure Portal](https://portal.azure.com) in your browser. If asked to log in, do so using your Microsoft account.

1. In the Azure Portal, click **+ New**. Type "bing search" (without quotation marks) into the search box and select **Bing Search v7 APIs** from the drop-down list. Then click the **Create** button at the bottom of the ensuing blade.

    ![Creating a new Bing Search API subscription](Images/new-search-api.png)

    _Creating a new Bing Search API subscription_

1. Type "bing-search-api" into the **Name** box and select **S1** as the **Pricing tier**. Select the same **Location** that you selected for the database in the previous exercise. Under **Resource group**, select **Use existing** and select the "MMLSparkResources" resource group that you created in [Exercise 1](#Exercise1). Check the **I confirm** box, and then click **Create**.

    ![Subscribing to the Bing Search API](Images/create-search-api.png)

    _Subscribing to the Bing Search API_

1. Click **Resource groups** in the ribbon on the left, and then click the subscription that you just created.

    ![Opening the subscription](Images/open-resource-group.png)

    _Opening the subscription_

1. Click the Bing Search subscription that you created a moment ago. TODO: Reshoot this screen.

    ![Opening the subscription](Images/open-search-api.png)

    _Opening the subscription_

1. Click **Keys** in the menu on the left. Then click the **Copy** button to the right of **KEY 1** to copy the access key to the clipboard.

    ![Copying the access key](Images/copy-search-key.png)

    _Copying the access key_

Finish up by pasting the key that is on the clipboard into your favorite text editor so you can easily retrieve it in the next exercise.

<a name="Exercise3"></a>
## Exercise 3: Populate the database ##

In this exercise, you will use Azure Machine Learning Workbench to write and execute a Python script that uses the Bing Image Search API to find images of paintings by famous artists such as Picasso, Van Gogh, and Monet and record information about the images, including their URLs, in the Azure SQL database that you created in [Exercise 1](#Exercise1).

1. If Azure Machine Learning Workbench isn't installed on your computer, go to https://docs.microsoft.com/azure/machine-learning/preview/quickstart-installation and follow the instructions there to install it, create a Machine Learning Experimentation account, and sign in to Machine Learning Workbench for the first time. The experimentation account is required in order to use Azure Machine Learning Workbench. Stop when you reach the section entitled "Create a new project."

1. Launch Azure Machine Learning Workbench if it isn't already running. Then click the **+** sign in the "Projects" panel and select **New Project**.

	![Creating a new project](Images/new-project-1.png)

	_Creating a new project_

1. Enter a project name such as "MNIST-Lab" and a project description. For **Project directory**, specify the location where you would like for the project directory to be created. Make sure **Blank Project** is selected as the project type, and then click the **Create** button.

	![Creating a new project](Images/new-project-2.png)

	_Creating a new project_

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
