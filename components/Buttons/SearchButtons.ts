import { useComponentSearchButtonsStore } from '~/stores/Buttons/componentSearchButtons';

// Search Query
import { ref } from "vue";

export function useSearchButtons() {

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled" },
  { id: 1, title: "Activity" },
  { id: 2, title: "Interactive" },
  // Add more cards as needed
]);

// Computed property for filtered cards
const matchesSearch = (card: any) => {
  return card.title.toLowerCase().includes(useComponentSearchButtonsStore().searchQuery.toLowerCase());
};

return {cards, matchesSearch};
}