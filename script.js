const modalBody = document.getElementById('modal-shadow')
const closeModalBtn = document.getElementById('close-modal-btn')
const modalContent = document.getElementById('modal-content')

closeModalBtn.addEventListener('click', () => {
    modalBody.classList.remove('active')
})

const posts = [
    {
        id: "first",
        heading: "Promotes Cognitive Development",
        texts: [
            "Toys play a vital role in boosting children’s cognitive development by encouraging them to explore, think critically, and solve problems. Puzzles, building blocks, and educational toys like shape sorters or memory games challenge a child's brain and improve skills like spatial awareness, logic, and pattern recognition.",
            "Through play, children learn cause and effect, improve their concentration, and develop strategies to tackle challenges, enhancing their mental agility.",
            "Cognitive play also supports language development as children learn to describe their activities and thoughts, expanding their vocabulary and comprehension.",
            "The process of figuring things out boosts confidence and nurtures a child’s natural curiosity, laying the foundation for lifelong learning."
        ]
    },
    {
        id: "second",
        heading: "Enhances Emotional Expression and Regulation",
        texts: [
            "Toys provide children with a safe way to express and explore their emotions. Role-play toys like dolls, action figures, or stuffed animals allow children to act out scenarios, giving them a platform to understand and process their feelings.",
            "Through imaginative play, children practice empathy by taking on different roles and perspectives, which helps them understand emotions like happiness, fear, or frustration.",
            "This kind of play is essential for developing emotional intelligence. Furthermore, when children encounter frustration in games or fail to achieve their desired outcome, they learn how to manage disappointment, improving emotional regulation and resilience over time."
        ]
    },
    {
        id: "third",
        heading: "Encourages Social Interaction and Cooperation",
        texts: [
            "Toys, especially those designed for group play, help foster social skills and cooperation among children.",
            "Board games, team sports, or group-building activities encourage children to collaborate, share, and negotiate, which are crucial components of social development.",
            "Playing with others teaches important interpersonal skills, such as taking turns, listening to others' ideas, and resolving conflicts.",
            "This helps children build friendships and develop a sense of belonging, which is essential for positive mental health.",
            "Social play also boosts self-esteem, as children experience the joy of being part of a team or working toward a shared goal."
        ]
    },
]

function openModalWithContent(prop) {
    let output = "";
    posts.map(post => {
        if (post.id == prop) {
            output = `
                <h4 class="modal-heading">${post.heading}</h4>
                <div class="modal-texts">
                    ${post.texts.map(txt => `<p>${txt}</p>`).join('')}
                </div>
            `;
        }
    });
    modalContent.innerHTML = output;
    modalBody.classList.add('active');
}
