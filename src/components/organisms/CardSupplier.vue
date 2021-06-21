<template>
  <section class="cardSupplier">
    <div>
      <AtomText
        :text="'Supplier'"
        :color="'gray-primary'"
        :size="'small'"
        :weight="'regular'"
      />
    </div>

    <div>
      <AtomText
        :text="name"
        :color="'blue-primary'"
        :size="'medium'"
        :weight="'semibold'"
      />
      <AtomBadge class="cardSupplier__badge" :text="`Code #${code}`" />
    </div>

    <div class="cardSupplier__column">
      <div>
        <AtomText
          :text="cnpj"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        /><br />

        <AtomText
          :text="address"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        />
      </div>

      <div>
        <AtomIcon
          :icon="'far fa-user'"
          :color="'gray-primary'"
          :marginRight="'4px'"
        />
        <AtomText
          :text="`${contactName} - `"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        />
        <AtomText
          :text="contactEmail"
          :color="'blue-primary'"
          :size="'small'"
          :weight="'regular'"
        /><br />

        <AtomIcon
          :icon="'fas fa-phone'"
          :color="'gray-primary'"
          :marginRight="'4px'"
        />
        <AtomText
          :text="`${contactPhone} - `"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        />

        <AtomIcon
          :icon="'fas fa-fax'"
          :color="'gray-primary'"
          :marginRight="'4px'"
        />
        <AtomText
          :text="contactFax"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        />
      </div>

      <div>
        <AtomIcon
          :icon="'far fa-eye'"
          :color="'gray-primary'"
          :marginRight="'4px'"
        />
        <AtomText
          :text="`Read: ${formatDate(readAt)}`"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        /><br />

        <AtomIcon
          :icon="'fas fa-reply'"
          :color="'gray-primary'"
          :marginRight="'4px'"
        />
        <AtomText
          :text="`Last Reply: ${formatDate(lastReplyAt)}`"
          :color="'black-primary'"
          :size="'small'"
          :weight="'regular'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AtomText from "../atoms/AtomText.vue";
import AtomBadge from "../atoms/AtomBadge.vue";
import AtomIcon from "../atoms/AtomIcon.vue";

export default {
  name: "OrganismsCardSupplier",
  components: {
    AtomText,
    AtomBadge,
    AtomIcon,
  },
  computed: {
    name() {
      return this.$store.state.data.supplier.name;
    },
    code() {
      return this.$store.state.data.supplier.code;
    },
    cnpj() {
      return this.$store.state.data.supplier.document.value;
    },
    address() {
      return this.$store.state.data.supplier.address;
    },
    contactName() {
      return this.$store.state.data.supplier.contact.name;
    },
    contactEmail() {
      return this.$store.state.data.supplier.contact.email;
    },
    contactPhone() {
      return this.$store.state.data.supplier.contact.phone;
    },
    contactFax() {
      return this.$store.state.data.supplier.contact.fax;
    },
    readAt() {
      return this.$store.state.data.supplier.readAt;
    },
    lastReplyAt() {
      return this.$store.state.data.supplier.lastReplyAt;
    },
  },
  methods: {
    formatDate(value) {
      const data = new Date(value);
      return `${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.cardSupplier {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include cardStyle(8px);
  padding: 16px;
  height: 112px;

  &__badge {
    margin-left: 10px;
  }

  &__column {
    display: flex;
    justify-content: space-between;
  }
}
</style>
