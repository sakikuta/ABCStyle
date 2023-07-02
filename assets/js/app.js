$(() => {
    // #header-hamburgerがクリックされたらis-activeをtoggleする
    $('#header-hamburger').on('click', () => {
        const isActive = 'is-active';
        $(event.currentTarget).toggleClass(isActive);
        $('.modal').toggleClass(isActive);
    });
});