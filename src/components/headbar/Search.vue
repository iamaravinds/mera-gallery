<template>
	<form>
		<label for="default-search" class='search-label'>Search</label>
		<div class='search-container'>
			<div class='search-flex'>
				<button
					class='dropdown-button'
					v-if='category.length'
					id="dropdown-button"
					type="button"
					@click='dropdownClicked'
					>
					{{getSelectedCategory}}
					<svg aria-hidden="true" class="icon-position" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" style="--darkreader-inline-fill:currentColor;">
						<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd">
						</path>
					</svg>
				</button>
				<div
					v-if='category.length'
					id="dropdown"
					:class="{
						'hidden': !isdropdownClicked
					}"
					class="dropdown-popup"
				>
						<ul aria-labelledby="dropdown-button">
							<li @click='dropdownClicked(false)' v-for='(item, index) in category' :key='index'>
								<button 
									class='dropdown-item'
									type="button"
									@click='selectCategory(item)'
								>
									{{item}}
								</button>
							</li>
						</ul>
				</div>
				<svg v-if='!category.length'
					class='search-icon'
					aria-hidden="true"
					fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke:currentColor;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				<input
					class='search-input'
					type="text"
					id='default-search'
					:placeholder="placeholder"
					required
					v-model='searchText'
					>
				<button 
				class='btn-primary'
					type="button" 
					@click='search'
				>
					Search
				</button>
			</div>
		</div>
	</form>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const emit = defineEmits(['search'])
const { placeholder, category, defaultCategoryPlaceholder } = defineProps({
	placeholder: {
		type: String,
		default: () => 'Start Searching',
	},
	category: {
		type: Array,
		default: () => [],
	},
	defaultCategoryPlaceholder: {
		type: String,
		default: () => 'Select Category',
	}
});
const selectedCategory = ref('');
const isdropdownClicked = ref(false);
const searchText = ref('');
const getSelectedCategory = computed(() => selectedCategory.value || defaultCategoryPlaceholder);

function search() {
  emit('search', {
		category: selectedCategory.value,
		searchText: searchText.value
	});
}

function dropdownClicked(value) {
	if (value === false) {
		isdropdownClicked.value = false;
	} else {
		isdropdownClicked.value = !isdropdownClicked.value;
	}
}

function selectCategory(value) {
	dropdownClicked(false);
	return selectedCategory.value = value;
}
</script>
