<template>
  <div>
    <AtomText
      :text="'Alooo'"
      :color="'red'"
      :size="'large'"
      :weight="'regular'"
    />

    <AtomTitle
      :text="'Alooo'"
      :color="'yellow'"
      :size="'large'"
      :weight="'bold'"
    />

    <AtomIcon :icon="'fab fa-mailchimp'" :color="'blue-dark'" />
    <AtomIcon :icon="'fas fa-arrow-left'" />
    <AtomIcon :icon="'fas fa-arrow-left'" />
    <AtomBadge :text="'Cheguei aqui'" />
  </div>
</template>

<script>
import AtomText from "./components/atoms/AtomText.vue";
import AtomTitle from "./components/atoms/AtomTitle.vue";
import AtomIcon from "./components/atoms/AtomIcon.vue";
import AtomBadge from "./components/atoms/AtomBadge.vue";

export default {
  components: {
    AtomText,
    AtomTitle,
    AtomIcon,
    AtomBadge,
  },
};
</script>
