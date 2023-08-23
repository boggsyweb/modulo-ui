import React from "react";

export const Icons = {

    settings: () => (
        <svg fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <g stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m20.35 8.923-.366-.204a2 2 0 0 1-.784-.724c-.017-.027-.033-.056-.065-.112a2.002 2.002 0 0 1-.3-1.157l.006-.425c.012-.68.018-1.022-.078-1.328a1.998 1.998 0 0 0-.417-.736c-.214-.24-.511-.412-1.106-.754l-.494-.285c-.592-.341-.889-.512-1.204-.577a1.999 1.999 0 0 0-.843.007c-.313.07-.606.246-1.191.596l-.003.002-.354.211c-.056.034-.085.05-.113.066-.278.155-.588.24-.907.25-.032.002-.065.002-.13.002l-.13-.001a1.997 1.997 0 0 1-.91-.252c-.028-.015-.055-.032-.111-.066l-.357-.214c-.589-.354-.884-.53-1.199-.601a1.998 1.998 0 0 0-.846-.006c-.316.066-.612.238-1.205.582l-.003.001-.488.283-.005.004c-.588.34-.883.512-1.095.751a2 2 0 0 0-.415.734c-.095.307-.09.649-.078 1.333l.007.424c0 .065.003.097.002.128a2.002 2.002 0 0 1-.301 1.027c-.033.056-.048.084-.065.11a2 2 0 0 1-.675.664l-.112.063-.361.2c-.602.333-.903.5-1.121.738a2 2 0 0 0-.43.73c-.1.307-.1.65-.099 1.338l.002.563c.001.683.003 1.024.104 1.329a2 2 0 0 0 .427.726c.218.236.516.402 1.113.734l.358.199c.061.034.092.05.121.068a2 2 0 0 1 .74.781l.067.12a2 2 0 0 1 .23 1.038l-.007.407c-.012.686-.017 1.03.079 1.337.085.272.227.523.417.736.214.24.512.411 1.106.754l.494.285c.593.341.889.512 1.204.577a2 2 0 0 0 .843-.007c.314-.07.607-.246 1.194-.598l.354-.212a1.997 1.997 0 0 1 1.02-.317h.26c.318.01.63.097.91.252l.092.055.376.226c.59.354.884.53 1.199.6a2 2 0 0 0 .846.008c.315-.066.613-.239 1.206-.583l.495-.287c.588-.342.883-.513 1.095-.752.19-.213.33-.463.415-.734.095-.305.09-.644.078-1.318l-.008-.44a2 2 0 0 1 .3-1.155l.065-.11a2 2 0 0 1 .675-.664l.11-.061.002-.001.361-.2c.602-.334.903-.5 1.122-.738.194-.21.34-.46.429-.73.1-.305.1-.647.098-1.327l-.002-.574c-.001-.683-.002-1.025-.103-1.33a2.002 2.002 0 0 0-.428-.725c-.217-.236-.515-.402-1.111-.733l-.002-.001Z"/>
                <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"/>
                </g>
                </svg>
         ),
    
    info: () => (
        <svg fill="none"         
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    search: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    home: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="M4 11.452V16.8c0 1.12 0 1.68.218 2.109.192.376.497.682.874.873.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.873c.218-.428.218-.987.218-2.105v-5.352c0-.534 0-.801-.065-1.05a1.998 1.998 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104-.37-.11-.764-.11-1.135 0-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    send: () => (
        <svg fill="none"       
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="m10.308 13.692 4.846-4.846M20.11 5.89l-4.09 13.294c-.367 1.192-.55 1.788-.867 1.985a.999.999 0 0 1-.912.076c-.345-.143-.624-.7-1.182-1.816l-2.59-5.182a2.104 2.104 0 0 0-.193-.342 1.002 1.002 0 0 0-.18-.181 2.036 2.036 0 0 0-.331-.186L4.572 10.94c-1.115-.558-1.673-.837-1.816-1.181a1 1 0 0 1 .076-.913c.197-.316.793-.5 1.985-.867l13.295-4.09c.937-.289 1.405-.433 1.722-.316a1 1 0 0 1 .594.594c.116.316-.028.784-.316 1.72v.002Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    copy: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="M9 9V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C10.52 3 11.08 3 12.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v5.6c0 1.12 0 1.68-.218 2.108a2.002 2.002 0 0 1-.874.874C19.48 15 18.92 15 17.803 15H15M9 9H6.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C3 10.52 3 11.08 3 12.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.607c1.117 0 1.676 0 2.104-.218.376-.192.683-.498.874-.874.218-.428.218-.987.218-2.105V15M9 9h2.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V15" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    expandDown: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="m19 9-7 7-7-7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    expandUp: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="m5 16 7-7 7 7" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        ),
    burger: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="M3 17h18M3 12h18M3 7h18" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    ),
    kebab: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <g stroke="currentcolor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
            </g>
            </svg>
    ),
    kebabVert: () => (
        <svg fill="none"        
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <g stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
            </g>
            </svg>
    ),
    close: () => (
        <svg fill="none"         
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24">
            <path d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    ),
    
}