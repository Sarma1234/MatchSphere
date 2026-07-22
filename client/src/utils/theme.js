export const applyAppearance = (appearance) => {

    if (!appearance) return;

    /* ------------------------------------------------------------------ */
    /* Theme                                                              */
    /* ------------------------------------------------------------------ */

    document.documentElement.setAttribute(
        "data-theme",
        appearance.theme || "dark"
    );

    /* ------------------------------------------------------------------ */
    /* Accent Color                                                       */
    /* ------------------------------------------------------------------ */

    document.documentElement.setAttribute(
        "data-accent",
        appearance.accentColor || "purple"
    );

    /* ------------------------------------------------------------------ */
    /* Compact Mode                                                       */
    /* ------------------------------------------------------------------ */

    document.body.classList.toggle(
        "compact-mode",
        appearance.compactMode
    );

    /* ------------------------------------------------------------------ */
    /* Animations                                                         */
    /* ------------------------------------------------------------------ */

    document.body.classList.toggle(
        "disable-animations",
        !appearance.animations
    );

};