<template>
  <div class="contact">
    <div>
      <AtomTitle
        :text="buyer"
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
        :text="name"
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
        :text="email"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
        :marginLeft="'4px'"
        :marginRight="'16px'"
      />

      <AtomIcon
        :icon="'fas fa-phone'"
        :color="'blue-dark'"
        :marginLeft="'16px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="phone"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
      />

      <AtomIcon
        :icon="'fas fa-fax'"
        :color="'blue-dark'"
        :marginLeft="'16px'"
        :marginRight="'4px'"
      />
      <AtomText
        :text="fax"
        :color="'black-primary'"
        :size="'small'"
        :weight="'regular'"
        :marginLeft="'4px'"
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
  computed: {
    buyer() {
      return this.$store.state.data.header.buyer;
    },
    name() {
      return this.$store.state.data.header.contact.name;
    },
    email() {
      return this.$store.state.data.header.contact.email;
    },
    phone() {
      return this.$store.state.data.header.contact.phone;
    },
    fax() {
      return this.$store.state.data.header.contact.fax;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
