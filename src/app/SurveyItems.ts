export interface SurveyItems {
    id: number,
    title: string,
    description: string,
    question1: string,
    question2: string,
    categoryId: number,
    category: {
        id: number,
        name: string
    }
}