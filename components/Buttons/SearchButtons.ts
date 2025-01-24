import { useComponentSearchStore } from '~/stores/componentSearch';

// Search Query
import { ref, computed } from "vue";

export function useSearchButtons() {

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled" },
  { id: 1, title: "Activity" },
  { id: 2, title: "Interactive" },
  // Add more cards as needed
]);

const searchQuery = ref(""); // Reactive search input

// Computed property for filtered cards
const matchesSearch = (card: any) => {
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
};

return {cards, searchQuery, matchesSearch};
}