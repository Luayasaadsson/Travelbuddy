

type AiAgents = {
    userId: string
    activatedAgents?: Agent[]
    nonActivatedAgents?: Agent[]
    // Usage
    useRecommendationAgent?: boolean | null
    usePersonalisedSearchAgent?: boolean | null
    useTransporationAgent?: boolean | null
    useAccomodationAgent?: boolean | null
    useRestaurantAgent?: boolean | null
    useSafetyAndEmergencyAgent?: boolean | null
    useCustomerSupportAgent?: boolean | null
    useStoryWriterAgent?: boolean | null
    useVirtualTourGuideAgent?: boolean | null
    useLanguageTranslationAgent?: boolean | null
    useWeatherForecastingAgent?: boolean | null
    useTravelItineraryPlannerAgent?: boolean | null
    useImageRecognitionAgent?: boolean | null
    usePackingAgent?: boolean | null
    useCostPredictionAgent?: boolean | null
    useBudgetingAgent?: boolean | null
    // Prompts
    recommendationAgentPrompt?: string | null
    personalisedSearchAgentPrompt?: string | null
    transporationAgentPrompt?: string | null
    accomodationAgentPrompt?: string | null
    restaurantAgentPrompt?: string | null
    safetyAndEmergencyAgentPrompt?: string | null
    customerSupportAgentPrompt?: string | null
    storyWriterAgentPrompt?: string | null
    virtualTourGuideAgentPrompt?: string | null
    languageTranslationAgentPrompt?: string | null
    weatherForecastingAgentPrompt?: string | null
    travelItineraryPlannerAgentPrompt?: string | null
    imageRecognitionAgentPrompt?: string | null
    packingAgentPrompt?: string | null
    costPredictionAgentPrompt?: string | null
    budgetingAgentPrompt?: string | null
}

export default AiAgents