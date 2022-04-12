import { writable } from 'svelte/store';

export const company = writable('Sevn News');
export const customTitle = writable('Últimas notícias');
export const identityColor = writable('#FFBD14');

/* 
* It was removed when using Preload

export const headlines = writable([])

export const highlighted = derived(headlines, ($headlines) => {
    if($headlines.length >= 3) {
        return $headlines.pop()
    }

    return {}
})

export const articles = writable([])
*/
