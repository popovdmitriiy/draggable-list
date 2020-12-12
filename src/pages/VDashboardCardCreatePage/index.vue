<template>
  <div class="card-create-page">
    <div class="card-create-page__body">
      <div class="card-create-page__header">
        {{ 'Add card' }}
      </div>
      <label class="app-form__label">
        <span>
          {{ 'Title' }}
        </span>
        <input
            v-model="title"
            class="app-form__input"
            type="text"
            placeholder="Title"
        />
      </label>
      <label class="app-form__label">
        <span>
          {{ 'Description' }}
        </span>
        <textarea
            v-model="description"
            class="app-form__textarea"
            placeholder="Description"
        />
      </label>
      <div class="app-form__btn-container">
        <div class="app-btn__wrapper">
          <button
            class="app-btn app-btn--cancel"
            @click="cancel"
          >
            {{ 'Cancel' }}
          </button>
        </div>
        <div class="app-btn__wrapper">
          <button
            class="app-btn app-btn--success"
            :disabled="!isValid"
            @click="save"
          >
            {{ 'Save' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./VDashboardCardCreatePage.js"/>
