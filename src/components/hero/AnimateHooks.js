const AnimateHooks = () => {
    const transition1 = {type: 'spring', duration: 1}
    const transition2 = {type: 'spring', duration: 2, delay:.5}
    const transition3 = {type: 'spring', duration: 2, delay:.6}
    const transition4 = {type: 'spring', duration: 2, delay:.9}
    const transition5 = {
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        delay : 1.2
    }
    const animate5 = {
                        opacity: [0 , 1, 1, 1, 1],
                        scale: [1, 1.3, 1, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["50%", "0%", "50%","0%", "50%"]
    }
    return {
        transition1,
        transition2,
        transition3,
        transition4,
        transition5,
        animate5
    }
}

export default AnimateHooks