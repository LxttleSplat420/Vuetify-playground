import { useComponentSearchStore } from '~/stores/useComponentSearchStore'; //Global Search Store [No change needed]

// Search Query [No change needed]
import { ref } from "vue";

export function useSearchBaseComponents() { //Remember to Update useSearchBaseComponents name

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Type_Ex_Styled" , author: "AUTHOR" , coAuthor: ["None"]},
  // Add more cards as needed below
]);

////////////////////////////////////////////////////////////
// Computed property for filtered cards, [No change needed]
const matchesSearch = (card: any) => {
  if (useComponentSearchStore().filter === "Component Type"){
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
  } else if (useComponentSearchStore().filter === "Author"){
    return card.author.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
  } else if (useComponentSearchStore().filter === "Co-Author"){
    return card.coAuthor.some((coAuthor: string) => 
      coAuthor.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase())
    );    
  }
};
////////////////////////////////////////////////////////////
return {cards, matchesSearch};
}