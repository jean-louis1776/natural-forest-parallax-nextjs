export const mouseMove = (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.01}deg;
		`,
  })
}

export const mouseLeave = () => {
  Object.assign(document.documentElement, {
    style: `
    --move-x: 0deg;
		--move-y: 0deg;
    `,
  })
}
