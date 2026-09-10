# Animate all statistics

## Changes
- Add one reusable counter component that starts when its number enters the viewport.
- Preserve suffixes such as `+` and `%`, while keeping the final values accessible to assistive technology.
- Respect reduced-motion preferences by showing final values immediately.
- Replace static numbers in the homepage, About, Services, and product detail statistics.
- Animate matching progress bars alongside their values where applicable.

## Verification
- Confirm the project builds successfully.
- Check the animation and final values in the browser on representative pages.

## Technical details
- Use `IntersectionObserver` and `requestAnimationFrame` without adding a dependency.
- Run each counter once per mount and clean up observers and animation frames.
