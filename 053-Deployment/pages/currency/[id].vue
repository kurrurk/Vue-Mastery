<script setup>
const route = useRoute();
const { data } = await useFetch("/api/ticker/?id=" + route.params.id);
const coin = data.value[0];
</script>

<template>
  <main>
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-white">{{ coin.name }} Detail page</h2>
    </div>
    <div class="card bg-base-200 shadow-2xl border border-base-content/10">
      <div class="card-body p-0">
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Rank</th>
                <th>Price - US $</th>
                <th>Market Cap - US $</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span class="badge badge-outline">
                    {{ coin.symbol }}
                  </span>
                </td>

                <td>
                  <span class="font-semibold">
                    {{ coin.rank }}
                  </span>
                </td>

                <td class="font-mono font-bold text-success">
                  ${{ coin.price_usd }}
                </td>

                <td class="font-mono font-bold text-info">
                  ${{ coin.market_cap_usd }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
