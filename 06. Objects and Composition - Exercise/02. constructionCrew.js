function constructionCrew(obj) {

    if (obj[`dizziness`] == true) {
        let needWater = 0.1 * Number(obj[`weight`]) * Number(obj[`experience`])
        obj[`levelOfHydrated`] += needWater
        obj[`dizziness`] == false
    }
    return obj



}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
)