document.addEventListener('DOMContentLoaded', () => {
    // Get all the letters from both word containers
    const letters = document.querySelectorAll('.letter');
    let totalDelay = 0;

    letters.forEach((letter, index) => {
        // Calculate a sequential delay for the rippling effect
        // Each letter starts its animation 0.05 seconds after the previous one
        totalDelay += 0.05; 
        
        // Add a small random variation to make it look more organic/jiggly
        const randomVariation = (Math.random() * 0.2) - 0.1; // -0.1s to +0.1s
        
        // Apply the animation delay style to both animations
        letter.style.animationDelay = `${totalDelay + randomVariation}s, ${totalDelay + randomVariation}s`;
    });
});