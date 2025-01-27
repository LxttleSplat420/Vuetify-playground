import { useComponentSearchStore } from '~/stores/layouts/useComponentSearchStore';

// Search Query
import { ref } from "vue";

export function useSearchCards() {

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled" },
  { id: 1, title: "Interactive" },
  // Add more cards as needed
]);

// Computed property for filtered cards
const matchesSearch = (card: any) => {
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
};

return {cards, matchesSearch};
}