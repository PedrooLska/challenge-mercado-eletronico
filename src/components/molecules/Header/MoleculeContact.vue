<template>
  <div class="contact">
    <div>
      <AtomTitle
        :text="'MTP West Buyer'"
        :color="'black-primary'"
        :size="'xlarge'"
        :weight="'semibold'"
      />
    </div>

    <div>
      <AtomIcon
        :icon="'fas fa-users'"
        :color="'blue-dark'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="'Jacksonville Group (Jason Burn)'"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />
      <AtomIcon
        :icon="'fas fa-info-circle'"
        :color="'blue-primary'"
        :marginLeft="'4px'"
      />
    </div>

    <div>
      <AtomIcon
        :icon="'far fa-envelope'"
        :color="'blue-dark'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="'jacksonvillegroup@me.com'"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />

      <AtomIcon
        :icon="'fas fa-phone'"
        :color="'blue-dark'"
        :marginLeft="'16px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="'903-575-3050'"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />

      <AtomIcon
        :icon="'fas fa-phone'"
        :color="'blue-dark'"
        :marginLeft="'16px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="'999-575-3050'"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />
    </div>
  </div>
</template>

<script>
import AtomIcon from "../../atoms/AtomIcon";
import AtomTitle from "../../atoms/AtomTitle";
import AtomText from "../../atoms/AtomText";

export default {
  components: {
    AtomIcon,
    AtomTitle,
    AtomText,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
