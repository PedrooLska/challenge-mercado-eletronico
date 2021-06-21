<template>
  <div class="card">
    <AtomText
      :text="address.label"
      :color="'black-primary'"
      :size="'small'"
      :weight="'regular'"
    />

    <div>
      <AtomText
        :text="address.name"
        :color="'black-primary'"
        :size="'medium'"
        :weight="'semibold'"
      />
      <AtomText
        v-if="address.code"
        :text="` - (${address.code})`"
        :color="'black-light'"
        :size="'medium'"
        :weight="'semibold'"
      />
    </div>

    <div class="card__container">
      <AtomIcon
        :icon="'fas fa-map-marker-alt'"
        :color="'gray-primary'"
        :marginLeft="'4px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="address.address"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      /><br />

      <AtomIcon
        :icon="'far fa-user'"
        :color="'gray-primary'"
        :marginLeft="'4px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="address.contact.name"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      /><br />

      <AtomIcon
        :icon="'far fa-envelope'"
        :color="'gray-primary'"
        :marginLeft="'4px'"
        :marginRight="'4px'"
      />
      <AtomText
        class="card__item"
        :text="address.contact.email"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      /><br />

      <AtomIcon
        :icon="'fas fa-phone'"
        :color="'gray-primary'"
        :marginLeft="'4px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="address.contact.phone"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />

      <AtomIcon
        :icon="'fas fa-fax'"
        :color="'gray-primary'"
        :marginLeft="'16px'"
        :marginRight="'4px'"
      />
      <AtomText
        class="card__item"
        :text="address.contact.fax"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />
    </div>
  </div>
</template>

<script>
import AtomText from "../atoms/AtomText.vue";
import AtomIcon from "../atoms/AtomIcon.vue";

export default {
  components: {
    AtomText,
    AtomIcon,
  },
  props: {
    address: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @include cardStyle(8px);
  padding: 12px 5px 30px 12px;
  height: 160px;
}
</style>
