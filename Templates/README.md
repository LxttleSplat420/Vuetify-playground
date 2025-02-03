# Example shown below for a brand new "Complex Switch" component

# Before we start some things to note:
## The naming scheme we'll use in this example will be as follows:
1) Everywhere "BaseComponent" is used, it will be renamed to "Switches".
2) Everywhere "Type" is used, it will be renamed to  "Complex".
3) Everywhere "Author" is used, it will be renamed to "Stefan".
4) *Note: any other name can be used in place of "BaseComponent", "Type" and  "Author". If a different brand new component is made with different names by a different Author.

## Step 1: Creating the new files:
1) Copy and paste the '~/Templates/components/BaseComponent' folder, into the '~/components' folder.
2) Copy and paste the '~/Templates/stores/BaseComponent' folder, into the '~/stores' folder.

## Step 2: Renaming the store files:
1) Open the  '~/stores/Basecomponent/Author/AuthorTypeBaseComponent.ts' file.
2) Change the "useMyAuthorTypeBaseComponentStore" and 'myAuthorTypeBaseComponentStore' variables using the naming scheme (Ex. useMyAuthorTypeStore becomes useMyStefanComplexSwitchStore). 
3) Rename the '~/stores/Basecomponent/Author/AuthorTypeBaseComponent.ts' relevant folder and file names. (Ex. new file and folder names will now be '~/stores/Switches/Stefan/StefanComplexSwitch.ts')

## Step 3: Renaming the BaseComponent folder and file structure
### We will be changing all the files and folders names here using our naming convention. Below is a step by step approach using our "Complex Switch" Example
1) Rename the 'components\BaseComponent\Author\Type\Type.vue' folders and files to 'components\Switches\Stefan\Complex\Complex.vue'.
2) Change the 'components\Switches\Stefan\AuthorBaseComponentPage.vue' file to 'components\Switches\Stefan\StefanSwitchesPage.vue'
3) Change the 'components\Switches\Stefan\AuthorSearchBaseComponents.ts' file to 'components\Switches\Stefan\StefanSearchSwitches.vue'
4) Change the 'components\Switches\BaseComponentPage.vue' file to 'components\Switches\SwitchesPage.vue'

## Step 3: Editing the 'components\Switches\Stefan\StefanSearchSwitches.ts' file
1) Open the file 'components\Switches\Stefan\StefanSearchSwitches.ts'.
2) Change the variable "useSearchBaseComponents" to "useSearchSwitches".
3) Cards info can be changed here or have new ones added if more are required later on. For now we will leave it as is.
4) The rest should not require any changes.

## Step 4: Editing the 'components\Switches\Stefan\Complex\Complex.vue' file
### We need to rename/ change the following things in the <script setup> section:
1) Set the '~/stores/BaseComponent/Author/AuthorTypeBaseComponent' path to the correct store path 'stores\Switches\Stefan\StefanComplexSwitch.ts'.
2) Change "useMyAuthorTypeStore" to the correct store name on lines 69 and 72 to "useMyStefanComplexSwitchStore".
3) CardId will use our "StefanSearchSwitches.ts" file to add a title, author and other info to our component type.
4) Next change '~/components/BaseComponent/Author/AuthorSearchBaseComponents' to '~/components/Switches/Stefan/StefanSearchSwitches'.
5) Change 'useSearchBaseComponents' on line 76 and 77 to 'useSearchSwitches'

## Step 5: Editing the 'components\Switches\Stefan\StefanSwitchesPage.vue' file
1) Change '~/components/BaseComponent/Author/Type/Type.vue' to '~/components/Switches/Stefan/Complex/Complex.vue'
2) Change "Type" on line 10 to "Complex"
3) This file is where we import all of our different components we've made into one document. For now we only have a Complex Switch, but more can be added using the same steps.

## Step 6: Editing the 'components\Switches\SwitchesPage.vue'
1) Change '~/components/BaseComponent/Author/AuthorBaseComponentPage.vue' to '~/components/Switches/Stefan/StefanSwitchesPage.vue'
2) Change "Author" on line 10 to "Stefan"
3) This file is where we import all our diiferent Authors, who all have their own individual Switches. For now we only have the one Author Stefan, but more can be added using the same steps.

## Step 7: Adding our page to the website
### In order to display and be able to navigate to our new component on the Webpage we need to do the following
1) Copy and paste the 'Templates\Pages\BaseComponent' folder into the '~/pages' directory.
2) Rename the new "BaseComponent" folder to "Switches".
### 3) Open the 'pages\Switches\individual.vue' file 
4) Change '~/components/BaseComponent/Author/BaseComponentPage.vue' to '~/components/Switches/SwitchesPage.vue'.
5) Also change "BaseComponentPage" to "SwitchesPage" on lines 2 and 14.
This will import all our different Switched (or BaseComponents) made by all our Authors.


## Step 8: Adding it to our Navigationbar
1) Open the 'layouts\navigationbar.vue' file.
2) At about Line 97: inside the const components { } brackets. Add the following: { title: 'Switches', link: '/switches' },
So that the const looks as follows (Might differ based on how many different components have been added to date):
const components = [
  { title: 'Buttons', link: '/buttons' },
  { title: 'Selects', link: '/selects' },
  { title: 'Cards', link: '/cards' },
  { title: 'Switches', link: '/switches' },
  { title: 'Test', link: '/test' },
  //Add more component title and links for navigation
]; 

# The new component should now be correctly set-up and should be visible on the webpage by navigating to the "Switches" page using the navigation drawer on the webpage".
# The component can be further edited by changing the relevant variables in the 'components\Switches\Stefan\Complex\Complex.vue'. 
# As well as it's title, author and co-authors using the 'components\Switches\Stefan\StefanSearchSwitches.ts' and changing the respective values in the const cards variable.
