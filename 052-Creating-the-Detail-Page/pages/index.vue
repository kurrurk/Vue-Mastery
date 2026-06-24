<script setup>
const { data } = await useFetch("/api/tickers/?limit=10");
</script>

<template>
  <main>
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-white">Index Page</h1>
    </div>
    <div class="card bg-base-200 shadow-2xl border border-base-content/10">
      <div class="card-body p-0">
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(currency, index) in data.data" :key="data.data.id">
                <td>{{ index + 1 }}</td>

                <td>
                  <div class="flex items-center gap-3">
                    <span class="font-semibold">
                      {{ currency.name }}
                    </span>
                  </div>
                </td>

                <td>
                  <span class="badge badge-outline">
                    {{ currency.symbol }}
                  </span>
                </td>

                <td class="font-mono font-bold text-success">
                  ${{ currency.price_usd }}
                </td>

                <td>
                  <NuxtLink
                    :to="/currency/ + currency.id"
                    class="btn btn-outline btn-info btn-sm w-full"
                    >{{ currency.id }}</NuxtLink
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>
