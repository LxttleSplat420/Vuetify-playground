import { useComponentSearchStore } from '~/stores/useComponentSearchStore'; //Global Search Store [No change needed]

// Search Query [No change needed]
import { ref } from "vue";

export function useStefanSearchMenus() { //Remember to Update useSearchBaseComponents name

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Interactive" , author: "Stefan" , coAuthor: ["Alienbushman"]},
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