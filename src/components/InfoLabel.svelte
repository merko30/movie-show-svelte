<script>
  export let label;
  export let value;
</script>

<div class="item" {...$$props}>
  <p class="label">{label}</p>
  <div class="content">
    <slot name="icon" />
    <slot />
    {#if value}<span class="value">{value}</span>{/if}
  </div>
</div>

<style scoped>
  .item {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .label {
    margin-bottom: 0.5rem;
    color: gray;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.2rem;
  }

  .value {
    margin-left: 0.5rem;
    text-align: center;
  }
</style>
