import { useComponentSearchStore } from '~/stores/useComponentSearchStore';

// Search Query
import { ref } from "vue";

export function useSearchSelects() {

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled", author: "Stefan" , coAuthor: "None" },
  { id: 1, title: "Activity", author: "Stefan" , coAuthor: "None" },
  // Add more cards as needed
]);

// Computed property for filtered cards
const matchesSearch = (card: any) => {
  if (useComponentSearchStore().filter === "Component Type"){
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
  } else if (useComponentSearchStore().filter === "Author"){
    return card.author.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
  } else if (useComponentSearchStore().filter === "Co-Author"){
    return card.coAuthor.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
  }
};

return {cards,  matchesSearch};
}