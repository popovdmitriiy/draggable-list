<template>
  <div class="dashboard-page">
    <div class="dashboard-page__header">
      <label>
        <input
          v-model="isEditingMode"
          type="checkbox"
        />
        <span>
          {{ 'Draggable Mode' }}
        </span>
      </label>
      <router-link
        to="/dashboard/card-create"
        class="dashboard-page__header-link"
      >
        {{ 'Add item' }}
      </router-link>
    </div>
    <div class="dashboard-page__body">
      <template v-for="(col, colIdx) in columns">
        <draggable
          class="dashboard-page__col"
          :key="colIdx"
          :list="colsData[col.name]"
          v-bind="{
            animation: 200,
          }"
          tag="div"
          handle=".handle"
          @change="handleChangeDrag($event, col.name)"
          group="people"
        >
          <div
            v-for="(cell, cellIdx) in colsData[col.name]"
            :key="cellIdx"
            class="dashboard-page__card-wrapper"
            :class="{
              'handle': isEditingMode,
            }"
          >
            <v-dashboard-card
              :title="cell.title"
              :description="cell.description"
            />
          </div>
        </draggable>
      </template>
    </div>
  </div>
</template>

<script src="./VDashboardPage.js"/>
