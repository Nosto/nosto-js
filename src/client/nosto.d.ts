/** @module client */
// @ts-nocheck
/**
 * @group Core
 */
type EventType = 
/**  view product */
"vp"
/** like product */
 | "lp"
/** dislike product */
 | "dp"
/** remove product */
 | "rp"
/** bought product */
 | "bp"
/** view category */
 | "vc"
/** order */
 | "or"
/** internal search */
 | "is"
/** add to cart */
 | "cp"
/** external campaign */
 | "ec"
/** external search */
 | "es"
/** give coupon */
 | "gc"
/** source */
 | "src"
/** cart popup recommendations */
 | "cpr"
/** page load */
 | "pl"
/** custom campaign */
 | "cc"
/** content campaign */
 | "con";
/**
 * @group Core
 */
type EventRefType = 
/** triggered mail */
"email"
/** email widgets */
 | "imgrec"
/** onsite recommendations */
 | "rec"
/** api recommendations */
 | "api"
/** onsite campaigns */
 | "oc"
/** category merchandising */
 | "cmp"
/** onsite search */
 | "os";
/**
 * @group Core
 */
type EventTuple = [
    type: EventType,
    target?: string,
    ref?: string,
    refSrc?: string,
    targetFragment?: string,
    refType?: EventRefType
];
/**
 * @group Core
 */
interface Event {
    type: EventType;
    target?: string;
    ref?: string;
    refSrc?: string;
    targetFragment?: string;
    refType?: EventRefType;
}

interface AbTestDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}
interface AbTestPreviewSettingsBase<T> {
    id: TestId;
    method: Method;
    name: string;
    segment: string;
    variations: T[];
}
interface AbTestPreviewSettingsDTO extends AbTestPreviewSettingsBase<AbTestVariationDTO> {
    variations: AbTestVariationDTO[];
}
interface AbTestVariation {
    base: boolean;
    id: string;
    name: string;
}
interface AbTestVariationDTO extends AbTestVariation {
}
interface AbstractFacebookPixelEvent<D> {
    d: D;
    n: string;
}
interface AbstractStacklaPixelEvent<D> {
    d: D;
    n: string;
}
interface ActiveVisitDTO {
    customer: CustomerDTO;
    visit: VisitDTO;
}
interface AnalyticEvent {
    properties?: AnalyticEventProperties;
}
interface AnalyticEventProperties {
    abTestAttribution?: Record<string, string>;
}
interface AttributedCampaignResult {
    div_id: string;
    html: string;
    result_id: string;
}
interface BigcommerceCustomerInfo {
    customer_reference: string;
    email: string;
    first_name?: string;
    group_id?: string;
    last_name?: string;
    marketing_permission?: boolean;
}
interface CartItem {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity: number;
    sku_id?: string;
    unit_price: number;
}
interface CategoryClick extends CategoryEvent {
    productId: string;
}
interface CategoryEvent extends AnalyticEvent {
    metadata: CategoryEventMetadata;
}
interface CategoryEventMetadata {
    category: string;
    categoryId?: string;
}
interface CategoryImpression extends CategoryEvent {
    page: number;
    productIds: string[];
}
interface ClientScriptSettingsDTO {
    account: string;
    addToCartPopup?: boolean;
    anyDomain: boolean;
    browserQueueActive: boolean;
    categoriesEnabled?: boolean;
    cmpMode: string;
    collectEmailFromURL?: boolean;
    cookieTime: number;
    currencySettings: Record<string, CurrencySettingsDTO>;
    debugRedirectUrl: string;
    defaultCurrencyCode: string;
    defaultVariantId: string;
    disablePlacementAntiFlickering?: boolean;
    discountPopupTriggers: Record<string, PopupTriggerSettingsDTO[]>;
    discountPopupVisible?: boolean;
    emailAddressUrlParamName: string;
    exchangeRates?: boolean;
    externalIdentifier: string;
    extraHosts: string[];
    fullTaggingRequired: boolean;
    intersectionObserved?: string[];
    jsErrorUrl: string;
    klaviyoCookie?: boolean;
    measurePerformance: boolean;
    mutationObserved?: string[];
    nostoRefParam: string;
    pageTypeFiltersForUntaggedPages?: boolean;
    parameterlessAttribution?: boolean;
    parameterlessAttributionNoQueryCheck?: boolean;
    placements: Record<string, DynamicPlacementDTO>;
    popupRibbonUrlFilter: boolean;
    recoveryPopupEnabled: boolean;
    searchApiUrl?: string;
    searchDeploymentId?: string;
    searchEnabled?: boolean;
    searchQueryParam: string;
    searchTemplateHost?: string;
    searchTemplatesEnabled?: boolean;
    secureCookie?: boolean;
    segmentUrlParameters: string[];
    sendTaggingOnlyIfNeeded?: boolean;
    server: string;
    serverProductPlacementFiltering?: boolean;
    shopifyCmpRedirect?: boolean;
    shopifySkuSelectionListener?: boolean;
    site: string;
    sourceParameterName: string;
    stacklaDomain: string;
    stacklaEmbedCodeEndpoint: string;
    stacklaTrackingUrl?: string;
    stacklaWidgetAssetPath: string;
    stacklaWidgetDomain: string;
    subDomain: string;
    thumbnailHost: string;
    trackingTypes: string[];
    triggerAddToCartPopupWithCookie?: boolean;
    usePixelAppExtension?: boolean;
    webComponents?: boolean;
    webComponentsVersion?: string;
}
interface ConditionDTO {
    advanced: boolean;
    brands: string[];
    categories: string[];
    exc_brands: string[];
    exc_categories: string[];
    exc_locations: string[][];
    exc_page_types: PageType[];
    exc_referer_urls: string[];
    exc_tags: string[];
    exc_url_parameters: string[];
    exc_urls: string[];
    hide_on_desktop: boolean;
    hide_on_mobile: boolean;
    locations: string[][];
    max_cart_size: number;
    max_cart_value: number;
    max_page_views: number;
    min_cart_size: number;
    min_cart_value: number;
    min_page_views: number;
    page_types: PageType[];
    referer_urls: string[];
    tags: string[];
    treat_url_conditions_as_filters: boolean;
    url_parameters: string[];
    urls: string[];
    enabled: boolean;
    enabledInJs: boolean;
}
interface ContentDebugDTO {
    divIds: string[];
    enabled: boolean;
    id: ContentId;
    name: string;
    rendered: boolean;
}
interface ConversionItem {
    name: string;
    price_currency_code: string;
    product_id: string;
    quantity?: number;
    sku_id?: string;
    unit_price?: number;
}
interface CrawlResponse {
    message: string;
    product_id: string;
}
interface CurrencySettingsDTO {
    currencyBeforeAmount: boolean;
    currencyToken?: string;
    decimalCharacter?: string;
    decimalPlaces: number;
    groupingSeparator?: string;
}
interface CustomerAffinityResponse {
    discount: number;
    top_brands: CustomerAffinityResponseItem[];
    top_categories: CustomerAffinityResponseItem[];
    top_product_types: CustomerAffinityResponseItem[];
    top_skus: Record<string, CustomerAffinityResponseItem[]>;
}
interface CustomerAffinityResponseItem {
    name: string;
    score: number;
}
interface CustomerDTO {
    id: string;
    marketing_permission: boolean;
    ref: string;
}
interface CustomerToken {
    token: string;
}
interface DebugRequestParamsDTO {
    at?: number;
    ep?: boolean;
    fs?: string[];
    tp?: TestPreviewsDTO;
}
interface DebugToolbarDataDTO {
    contentCampaigns: ContentDebugDTO[];
    dev: boolean;
    draftTests: AbTestDraftPreviewSettingsDTO[];
    loggedIn: boolean;
    placements: PlacementDebugDTO[];
    placementsTab: boolean;
    popupPreviewSettings: PopupCampaignPreviewSettingsDTO[];
    recommendationCampaigns: RecommendationDebugDTO[];
    richSegmentsTab: boolean;
    runningTests: AbTestPreviewSettingsDTO[];
    segments: SegmentDebugDTO[];
    showImprovedCampaignOverlayData: boolean;
    showStacklaTab: boolean;
    showTestsTab: boolean;
    stacklaWidgets: StacklaWidgetDebugDTO[];
}
interface DynamicPlacementDTO {
    cssSelector?: string;
    enabled: boolean;
    filters: FilterRule[];
    id: string;
    intersection?: boolean;
    mode: InsertMode;
    mutation?: boolean;
    wrapper: WrapMode;
}
interface Effect {
    delay_min: number;
    re_entry_tolerance: number;
    scroll_min: number;
}
interface EventAttributionMetadata {
    customer_reference?: string;
    event_date?: Date;
    referrer?: string;
    url?: string;
}
interface EventAttributionParams {
    events: EventFields[];
    metadata: EventAttributionMetadata;
}
interface EventFields {
    event_ref_type?: string;
    event_type: string;
    ref?: string;
    ref_src?: string;
    target: string;
    target_fragment?: string;
}
interface EventPreviewMessage {
    affinity_signals?: Record<string, string[]>;
    brands?: string[];
    cart?: CartItem[];
    cart_hash?: string;
    cart_popup?: boolean;
    categories?: string[];
    category_ids?: string[];
    coupon_campaign?: string;
    coupon_code?: string;
    coupon_used?: boolean;
    current_variant_id?: string;
    custom_fields?: Record<string, string[]>;
    customer?: PushedCustomer;
    debug?: DebugRequestParamsDTO;
    debug_token?: string;
    divId: string;
    elements?: string[];
    event_date?: Date;
    events?: EventTuple[];
    experiments?: Experiment[];
    external_identifier?: string;
    klaviyo_cookie?: string;
    mail_ref?: string;
    mail_type?: string;
    page_type?: PageType;
    post_purchase_result_id?: string;
    preview?: boolean;
    recoId?: string;
    recotrace?: string;
    ref?: string;
    referrer?: string;
    response_mode?: RenderMode;
    restore_link?: string;
    segment_codes?: string[];
    skipcache?: boolean;
    sort_order?: string;
    tags?: string[];
    templateData: string;
    url?: string;
}
interface EventRequestMessageV1 {
    affinity_signals?: Record<string, string[]>;
    brands?: string[];
    cart?: CartItem[];
    cart_hash?: string;
    cart_popup?: boolean;
    categories?: string[];
    category_ids?: string[];
    coupon_campaign?: string;
    coupon_code?: string;
    coupon_used?: boolean;
    current_variant_id?: string;
    custom_fields?: Record<string, string[]>;
    customer?: PushedCustomer;
    debug?: DebugRequestParamsDTO;
    debug_token?: string;
    elements?: string[];
    event_date?: Date;
    events?: EventTuple[];
    experiments?: Experiment[];
    external_identifier?: string;
    klaviyo_cookie?: string;
    mail_ref?: string;
    mail_type?: string;
    page_type?: PageType;
    post_purchase_result_id?: string;
    preview?: boolean;
    recotrace?: string;
    ref?: string;
    referrer?: string;
    response_mode?: RenderMode;
    restore_link?: string;
    segment_codes?: string[];
    skipcache?: boolean;
    sort_order?: string;
    tags?: string[];
    url?: string;
}
interface EventResponseMessage {
    af: CustomerAffinityResponse;
    cdc: string;
    cmpid: string;
    cpr: string;
    cs: number;
    ct: number;
    customer: string;
    debug: DebugToolbarDataDTO;
    ed: Date;
    errors: string[];
    fb: FacebookData;
    ga: GoogleAnalyticsData;
    gl: string[];
    he: boolean;
    hiic: boolean;
    js: string;
    nc: boolean;
    pv: number;
    recommendations: Record<string, CampaignResult>;
    se: SegmentsResponseBean;
    sp: StacklaTrackingData;
    visit: string;
    processedRecommendations: Record<string, CampaignResult>;
}
interface Events {
}
interface Experiment {
    id: string;
    id_stamp?: string;
    name?: string;
    variation: string;
    variation_name?: string;
}
interface FacebookData {
    a: string;
    e: AbstractFacebookPixelEvent<unknown>[];
    p: string;
    s: string[];
}
interface FilterRule {
    field?: string;
    negate?: boolean;
    operator: FilterOperator;
    values?: unknown[];
}
interface ForcedTestDTO {
    t: TestId;
    v: string;
}
interface GoogleAnalyticsData {
    s?: string[];
}
interface JSONProduct {
    alternate_image_urls: string[];
    brand?: string;
    categories: string[];
    custom_fields: Record<string, string>;
    date_published?: number;
    description?: string;
    handle: string;
    image_url?: string;
    list_price?: number;
    list_price_text?: string;
    name: string;
    price: number;
    price_currency_code: string;
    price_text?: string;
    product_id: string;
    rating_value?: number;
    recommended_sku?: JSONSku;
    review_count?: number;
    skus: JSONSku[];
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url?: string;
    url: string;
    variant_id?: string;
}
interface JSONResult extends RenderResult<JSONResult> {
    element: string;
    products: JSONProduct[];
    source_product_ids: string[];
    title?: string;
}
interface JSONSku {
    available: boolean;
    custom_fields: Record<string, string>;
    id: string;
    image_url?: string;
    list_price: number;
    name: string;
    price: number;
    url: string;
}
interface NostoSku extends Sku {
    inventory_level?: number;
}
interface NostoVariant {
    availability: string;
    available: boolean;
    discounted: boolean;
    list_price?: number;
    price: number;
    price_currency_code: string;
    price_text?: string;
}
interface Option {
    option_title: string;
    option_values: OptionValue[];
}
interface OptionValue {
    available_for_sale: boolean;
    name: string;
}
interface OrderCustomer {
    country: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    newsletter?: string;
    order_number: string;
    phone: string;
    post_code: string;
    type?: string;
}
interface OrderInfo {
    country_code: string;
    customer_id: string;
    customer_reference?: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    newsletter?: boolean;
    order_number: string;
    phone_number: string;
    type: string;
    zip_code: string;
}
interface OverlapCampaignDTO {
    enabled: boolean;
    feature: OnsiteFeature;
    id: string;
    name: string;
    schedule?: ScheduleTime;
}
interface PlacementDebugDTO {
    activeRule?: SegmentRuleDebugDTO;
    divId: string;
    enabled: boolean;
    id: string;
    name: string;
    rules: PlacementRuleDTO[];
}
interface PlacementRuleDTO {
    feature?: OnsiteFeature;
    segment: string;
    to?: CampaignId;
}
interface PopupCampaignPreviewSettingsDTO {
    campaign_id: string;
    campaign_title: string;
    condition: ConditionDTO;
    enabled: boolean;
    popup_id: string;
    type: string;
}
interface PopupCouponGiven extends PopupEvent {
    campaignId: string;
}
interface PopupEmailCollected extends PopupEvent {
    campaignId: string;
}
interface PopupEvent extends AnalyticEvent {
    campaign_id: string;
}
interface PopupTriggerSettingsDTO {
    condition: ConditionDTO;
    effect: Effect;
    enabled: boolean;
    id: string;
    name: string;
    ordinal: number;
    popup_id: string;
}
interface PopupTriggered extends PopupEvent {
    campaignId: string;
}
interface PostPurchaseOffer {
    customer: string;
    discount_type: string;
    discount_value: number;
    hide_description: boolean;
    main_offer_header: string;
    offer_end_text: string;
    offer_time_end: number;
    recommendations: PostPurchaseRecommendation[];
    sub_offer_header: string;
}
interface PostPurchaseRecommendation {
    available_for_sale: boolean;
    description?: string;
    image_url: string;
    metafield_description?: string;
    options: Option[];
    product_id: string;
    result_id?: string;
    signature_hash: string;
    skus: PostPurchaseRecommendationSku[];
    title: string;
}
interface PostPurchaseRecommendationSku {
    available_for_sale: boolean;
    id: string;
    selected_options: string[];
}
interface ProductPushResponse {
    messages: string[];
}
interface PushedCustomer {
    customer_reference?: string;
    email: string;
    first_name?: string;
    hcid?: string;
    last_name?: string;
    newsletter?: boolean;
    order_number?: string;
    source?: string;
    source_id?: string;
    type?: string;
}
interface PushedProduct {
    age_group?: string;
    alternate_image_urls: string[];
    availability: string;
    brand?: string;
    category: string[];
    category_id: string[];
    condition?: string;
    custom_fields: Record<string, string>;
    date_published?: Date;
    description?: string;
    gender?: string;
    google_category?: string;
    gtin?: string;
    image_url?: string;
    inventory_level?: number;
    list_price?: number;
    name: string;
    parent_category_id: string[];
    price: number;
    price_currency_code: string;
    product_id: string;
    rating_value?: number;
    review_count?: number;
    skus: PushedProductSKU[];
    source_updated?: Date;
    supplier_cost?: number;
    tags1: string[];
    tags2: string[];
    tags3: string[];
    thumb_url?: string;
    unit_pricing_base_measure?: number;
    unit_pricing_measure?: number;
    unit_pricing_unit?: string;
    update_received?: Date;
    url: string;
    variation_id?: string;
    variations: Record<string, PushedVariation>;
}
interface PushedProductSKU extends NostoSku {
}
interface PushedVariation extends NostoVariant {
}
interface RecommendationDebugDTO {
    divId?: string;
    divIds: string[];
    enabled: boolean;
    fbLink: string;
    fbTitle: string;
    fbType: string;
    filtered: boolean;
    id: RecommendationId;
    ittt: boolean;
    link: string;
    productIds: Record<string, string>;
    recoId: string;
    rendered: boolean;
    resultType: string;
    title: string;
    type: string;
    variant: boolean;
}
interface RenderResult<DataType> {
    data: DataType;
    div_id: string;
    product_ids: Record<string, string>;
    raw_data?: unknown;
    reco_id: string;
    result_id: string;
    result_type: ResultType;
}
interface ScheduleTime {
    from: string;
    fromTime?: string;
    timezone?: string;
    to?: string;
    toTime?: string;
    type?: string;
    weekDays?: string[];
}
interface SearchClick extends SearchEvent {
    productId: string;
}
interface SearchEvent extends AnalyticEvent {
    metadata: SearchEventMetadata;
}
interface SearchEventMetadata {
    hasResults: boolean;
    isAutoComplete: boolean;
    isAutoCorrect: boolean;
    isKeyword: boolean;
    isOrganic: boolean;
    isRefined: boolean;
    isSorted: boolean;
    query: string;
    refinedQuery?: string;
    resultId: string;
}
interface SearchImpression extends SearchEvent {
    page: number;
    productIds: string[];
}
interface SegmentDebugDTO {
    active: boolean;
    forced: boolean;
    id: string;
    name: string;
}
interface SegmentInfoBean {
    id: string;
}
interface SegmentRuleDebugDTO {
    draft?: TestDebugDTO;
    segment: string;
    test?: TestDebugDTO;
    to?: CampaignId;
    type: TargetType;
}
interface SegmentsResponseBean {
    active_segments: SegmentInfoBean[];
}
interface Sku {
    availability: string;
    custom_fields: Record<string, string>;
    gtin?: string;
    id: string;
    image_url?: string;
    list_price?: number;
    name: string;
    price: number;
    url?: string;
}
interface StacklaTrackingData {
    e: AbstractStacklaPixelEvent<unknown>[];
}
interface StacklaWidgetDebugDTO {
    divIds: string[];
    enabled: boolean;
    filterType: StacklaWidgetFilterType;
    id: StacklaWidgetEmbedId;
    name: string;
    rendered: boolean;
    usedInTest: boolean;
    widgetId: string;
}
interface TestDebugDTO {
    id: TestId;
    variation: string;
}
interface TestPlacementRuleDTO {
    feature?: OnsiteFeature;
    placement: string;
    segment: string;
    to?: CampaignId;
}
interface TestPreviewsDTO {
    d?: ForcedTestDTO;
    t: ForcedTestDTO[];
    u?: UnsavedDraftPreviewSettingsDTO;
}
interface UnsavedDraftPreviewSettingsDTO extends AbTestPreviewSettingsBase<VariationWithRulesDTO> {
    variations: VariationWithRulesDTO[];
}
interface ValidationError {
    key: string;
    message: string;
}
interface VariationWithRulesDTO extends AbTestVariationDTO {
    rules: TestPlacementRuleDTO[];
}
interface VisitDTO {
    cart_items: CartItem[];
    customer_id: string;
    email: string;
    events: Events;
    id: string;
}
interface WebsiteOrder {
    created_at?: Date;
    external_order_ref?: string;
    info: OrderCustomer;
    items: ConversionItem[];
    order_status?: string;
    order_status_label?: string;
    payment_provider?: string;
}
interface WidgetPlacement {
    enabled: boolean;
    id?: string;
    name: string;
    rules?: WidgetPlacementRule[];
}
interface WidgetPlacementRule {
    feature?: OnsiteFeature;
    segment: string;
    to?: string;
}
type ContentId = CampaignId<"ContentId">;
type FilterOperator = "INCLUDES" | "IS" | "CONTAINS" | "MATCHES_REGEXP_PATTERN" | "LT" | "GT" | "GTE" | "LTE" | "BETWEEN" | "AND" | "OR";
type InsertMode = "REPLACE" | "APPEND" | "PREPEND" | "INSERT_INTO" | "INSERT_AFTER_BEGIN";
type Method = "SPLIT_TEST" | "MVT";
type OnsiteFeature = "RECOMMENDATION" | "CONTENT_DELIVERY" | "POPUP" | "SPLIT_TESTING" | "SCHEDULING" | "STACKLA_WIDGET" | "DYNAMIC_BUNDLES";
type PageType = "front" | "category" | "product" | "cart" | "search" | "notfound" | "order" | "other" | "checkout" | "post-purchase";
type PopupId = CampaignId<"PopupId">;
type RecommendationId = CampaignId<"RecommendationId">;
type RenderMode = "HTML" | "SIMPLE" | "JSON_170x170" | "JSON_100_X_100" | "JSON_90x70" | "JSON_50x50" | "JSON_30x30" | "JSON_100x140" | "JSON_200x200" | "JSON_400x400" | "JSON_750x750" | "JSON_10_MAX_SQUARE" | "JSON_200x200_SQUARE" | "JSON_400x400_SQUARE" | "JSON_750x750_SQUARE" | "JSON_ORIGINAL" | "VERSION_SOURCE";
type ResultType = "REAL" | "MOCK" | "RANDOM";
type ScheduleEntryId = CampaignId<"ScheduleEntryId">;
type StacklaWidgetEmbedId = CampaignId<"StacklaWidgetEmbedId">;
type StacklaWidgetFilterType = "LATEST" | "CATEGORY_OR_BRAND" | "PRODUCT";
type TargetType = "RECOMMENDATION" | "ONSITE_CONTENT" | "AB_TEST" | "HIDE_CONTENT" | "STACKLA_WIDGET";
type TestId = CampaignId<"TestId">;
type WrapMode = "SIMPLE" | "PRESERVE_CLASS" | "CLONED" | "UNWRAPPED";
type CampaignResult = AttributedCampaignResult | JSONResult | string;
type CampaignId<T extends string = string> = string & {
    __kind: T;
};

interface Coupon {
    campaign?: string;
    code?: string;
    used?: boolean;
}
interface Order {
    items: CartItem[];
}

interface PluginMetadata {
    mainModule?: string;
    cmpModule?: string;
    msiModule?: string;
}
type Product = Partial<PushedProduct> & {
    product_id: string;
    valid_until?: string;
    selected_sku_id?: string;
};
interface Cart {
    hcid?: string;
    items: CartItem[];
}
interface TaggingData {
    cart: Cart | undefined;
    customer: PushedCustomer | undefined;
    variation: string | undefined;
    restoreLink: string | undefined;
    products: Product[];
    order: WebsiteOrder | undefined;
    searchTerms: string[] | undefined;
    brands: string[] | undefined;
    categories: string[] | undefined;
    categoryIds: string[] | undefined;
    parentCategoryIds: string[] | undefined;
    tags: string[] | undefined;
    customFields: Record<string, string[]> | undefined;
    elements: string[] | undefined;
    pageType: PageType | undefined;
    affinitySignals: Record<string, string[]> | undefined;
    sortOrder: string | undefined;
    pluginVersion: PluginMetadata | undefined;
}

interface RecommendationRequestFlags {
    skipPageViews?: boolean;
    trackEvents?: boolean;
    skipEvents?: boolean;
    reloadCart?: boolean;
}
/**
 * RequestBuilder is a low level API to interact with the Nosto API. It's primary purpose is to fetch recommendations
 * and send events to the Nosto API. It is not recommended to use this API directly, but rather use the the higher level
 * Tagging and Session APIs.
 *
 * @group Core
 */
interface RequestBuilder {
    /**
     * Sets the given list of forced segment identifiers to the current request. This
     * method allows you explicitly associate the current customer with a segment.
     *
     * @private
     * @param {String[]} segments the list of force segment identifiers
     */
    setForcedSegments(segments: string[]): RequestBuilder;
    /**
     * Sets the given list of manual segment identifiers to the current request. This
     * method allows you explicitly associate the current customer with a segment.
     *
     * @param {String[]} segments the list of force segment identifiers
     */
    setSegmentCodes(segments: string[]): RequestBuilder;
    /**
     * Override targets for campaign injection. The targets are used to
     * identify the elements in the DOM into which campaign results should be injected.
     *
     * @param {Record<string, HTMLElement>} targets from placement id to DOM element
     */
    setTargets(targets: Record<string, HTMLElement>): RequestBuilder;
    /**
     * Sets the identifier of the current page type to the current request. The different
     * page types are product, front, search, cart, order, category, notfound and other.
     *
     * @param {String} pageType the current page type
     */
    setPageType(pageType: PageType | undefined): RequestBuilder;
    /**
     * Sets the identifier of the current sort order to the current request.
     *
     * @private
     * @param {String} sortOrder the current sort order
     */
    setSortOrder(sortOrder: string): RequestBuilder;
    /**
     * Adds affinity signals to the current request.
     *
     * @param signals signals to set
     */
    setAffinitySignals(signals: Record<string, string[]>): RequestBuilder;
    /**
     * Adds the given event to the current set of events. When viewing a product,
     * it is required that you specify the "vp" as event and the product id as
     * the target.
     *
     * Also supports legacy signature
     * addEvent(type: string, target?: string, ref?: string, targetFragment?: string) {
     * }
     *
     * @private
     * @param {Event} event { type, target, ref, refSrc, targetFragment, refType }
     */
    addEvent(event: Event): RequestBuilder;
    /**
     * Sets the information about the currently logged in customer. If the current
     * customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
     * <br/><br/>
     * It is not recommended to pass the current customer details to the request
     * builder but rather use the customer tagging.
     *
     * @param {Customer} customer the details of the currently logged in customer
     */
    setCustomer(customer: PushedCustomer): RequestBuilder;
    setCoupon(coupon: Coupon): RequestBuilder;
    /**
     * Adds the given elements (or placements) to the request. Any identifiers
     * specified here are simply added to the elements already in the request.
     *
     * @param {String[]} elements the array of placements
     *
     * @example
     * <caption>To load data for a single placement</caption>
     * nostojs(api => api
     *   .createRecommendationRequest()
     *   .addElements(['bestseller-home'])
     *   .loadRecommendations());
     */
    addElements(elements: string[]): RequestBuilder;
    /**
     * Sets the given elements (or placements) to the request. Any identifiers
     * specified here override all elements already in the request.
     *
     * @param {String[]} elements the array of placements
     *
     * @example
     * <caption>To load data for a single placement</caption>
     * nostojs(api => api
     *   .createRecommendationRequest()
     *   .setElements(['bestseller-home'])
     *   .loadRecommendations());
     */
    setElements(elements: string[] | undefined): RequestBuilder;
    /**
     * Adds the cart object to the current request. This should be preferably
     * on every page load so as to keep the cart state as fresh as possible.
     *
     * @param {PushedCart} cart the details of the current shopping basket
     */
    setCartContent(cart: Cart | undefined): RequestBuilder;
    /**
     * Sets the restore link for the current session. Restore links can be leveraged
     * in email campaigns. Restore links allow the the user to restore the cart
     * contents in a single click.
     * <br/><br/>
     * Read more about
     * {@link https://help.nosto.com/en/articles/664692|how to leverage the restore cart link}
     * <br/><br/>
     * It is not recommended to pass the current restore link to the request
     * builder but rather use the tagging approach.
     *
     * @param restoreLink
     */
    setRestoreLink(restoreLink: string | undefined): RequestBuilder;
    /**
     * Adds the given identifiers of the products in the customer's shopping cart
     * to the request.
     *
     * @deprecated since this only transported partial information about the cart
     * @private
     */
    addCartItems(): RequestBuilder;
    /**
     * Sets the hash of the current cart cookie for ensure that the cart tagging
     * isn't cached. In most cases, simply reading the customer's 2c.cid cookie
     * and generating a SHA256 checksum will suffice.
     *
     * @deprecated
     * @param {String} hash the 32 character unique hash
     */
    addCartCookieHash(hash: string): RequestBuilder;
    /**
     * Sets the total value of the customer's shopping cart. This should be the
     * numerical value of what the customer sees in the mini-cart element of the
     * store.
     *
     * @deprecated since this only transported partial information about the cart
     * @private
     */
    addCartTotal(): RequestBuilder;
    /**
     * Sets the total value of the customer's shopping cart. This should be the
     * numerical value of what the customer sees in the mini-cart element of the
     * store.
     *
     * @deprecated since this only transported partial information about the cart
     * @private
     */
    addCartSize(): RequestBuilder;
    /**
     * @param {Array.<Product>} products
     * @param {String} [ref] the placement id that resulted in the product views
     */
    setProducts(products: Product[], ref?: string): RequestBuilder;
    /**
     * Adds the given brand names to the request. Any brand name specified here
     * are simply added to the request as personalisation filtering hints.
     *
     * @param {String[]} brands the array of category ids
     */
    addCurrentBrands(brands: string[]): RequestBuilder;
    /**
     * Sets the given brand names to the request. Any brand names specified here
     * override the brand names in the request.
     *
     * @param {String[]} brands the array of category ids
     */
    setCurrentBrands(brands: string[]): RequestBuilder;
    /**
     * Adds the given category names to the request. Any category name specified here
     * are simply added to the request as personalisation filtering hints.
     *
     * @param {String[]} categories the array of category ids
     */
    addCurrentCategories(categories: string[]): RequestBuilder;
    /**
     * Sets the given category names to the request. Any category names specified here
     * override the category names in the request.
     *
     * @param {String[]} categories the array of category ids
     */
    setCurrentCategories(categories: string[]): RequestBuilder;
    /**
     * Adds the given category ids to the request. Any category ids specified here
     * are simply added to the request as personalisation filtering hints.
     *
     * @param {String[]} categoryIds the array of category ids
     */
    addCurrentCategoryIds(categoryIds: string[]): RequestBuilder;
    /**
     * Adds the given parent category ids to the request. Any parent category ids specified here
     * are simply added to the request as personalisation filtering hints.
     */
    addCurrentParentCategoryIds(parentCategoryIds: string[]): RequestBuilder;
    /**
     * Adds the given current tags to the request. Any tags (tags1, tags12, or
     * tags13) specified here are simply added to the request as personalisation
     * filtering hints.
     *
     * @param {String[]} tags the array of tags
     */
    addCurrentTags(tags: string[]): RequestBuilder;
    /**
     * Sets the given current tags to the request. Any tags (tags1, tags12, or
     * tags13) specified here are simply set to the request as personalisation
     * filtering hints.
     *
     * @param {String[]} tags the array of tags
     */
    setCurrentTags(tags: string[]): RequestBuilder;
    /**
     * Adds the given current custom fields to the request. Any custom fields
     * specified here are simply added to the request as personalisation filtering hints.
     *
     * @param { Object } fields custom field key-value pairs
     */
    addCurrentCustomFields(fields: Record<string, string[]>): RequestBuilder;
    /**
     * Sets the current lower price range to the request. Faceting needs to be
     * enabled for the slot in order for this to function. Any lower value
     * specified here are simply added to the request as personalisation filtering hints.
     *
     * @param {Number} value the lower range of the price
     */
    setCurrentPriceFrom(value: number): RequestBuilder;
    /**
     * Sets the current upper price range to the request. Faceting needs to be
     * enabled for the slot in order for this to function. Any upper value
     * specified here are simply added to the request as personalisation filtering hints.
     *
     * @param {Number} value the upper range of the price
     */
    setCurrentPriceTo(value: number): RequestBuilder;
    /**
     * Sets the current variation identifier for the session. A variation identifier
     * identifies the current currency (or the current customer group). If your site
     * uses multi-currency, you must provide the ISO code current currency being viewed.
     * <br/><br/>
     * It is not recommended to pass the variation identifier to an request builder but
     * instead leverage the tagging.
     *
     * @param {String} variation the case-sensitive identifier of the current variation
     */
    addCurrentVariation(variation: string): RequestBuilder;
    /**
     * Sets the information about the currently logged in customer. If the current
     * customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
     * <br/><br/>
     * It is not recommended to pass the current customer details to the request
     * builder but rather use the customer tagging.
     *
     * @param {Customer} customer
     */
    addCustomer(customer: PushedCustomer): RequestBuilder;
    /**
     * Sets the response mode for the current request. The response mode can be
     * used to switch between HTML and JSON. Here is an exhaustive list of the
     * response modes.
     *
     * | Modes                | Description                                    |
     * | -------------------- |:----------------------------------------------:|
     * | HTML                 | HTML (SSR)                                     |
     * | JSON_170x170         | Raw JSON with 170x170px original aspect images |
     * | JSON_100_X_100       | Raw JSON with 100x100px original aspect images |
     * | JSON_90x70           | Raw JSON with 90x70px original aspect images   |
     * | JSON_50x50           | Raw JSON with 50x50px original aspect images   |
     * | JSON_30x30           | Raw JSON with 30x30px original aspect images   |
     * | JSON_100x140         | Raw JSON with 100x140px original aspect images |
     * | JSON_200x200         | Raw JSON with 200x200px original aspect images |
     * | JSON_400x400         | Raw JSON with 400x400px original aspect images |
     * | JSON_750x750         | Raw JSON with 750x750px original aspect images |
     * | JSON_10_MAX_SQUARE   | Raw JSON with 100x100px center squared images  |
     * | JSON_200x200_SQUARE  | Raw JSON with 200x200px center squared images  |
     * | JSON_400x400_SQUARE  | Raw JSON with 400x400px center squared images  |
     * | JSON_750x750_SQUARE  | Raw JSON with 750x750px center squared images  |
     * | JSON_ORIGINAL        | Raw JSON with the original, normalized images  |
     * | VERSION_SOURCE       | Raw JSON with the original untouched images    |
     *
     * @param {String} mode the response mode to be used
     */
    setResponseMode(mode: RenderMode): RequestBuilder;
    setExperiments(experiments: Experiment[]): RequestBuilder;
    /**
     * Disables the campaign injection for the current request. This is useful
     * when you want to disable the campaign injection for a specific request.
     */
    disableCampaignInjection(): RequestBuilder;
    /**
     * Enables the preview mode for the current request. The preview mode is
     * automatically gathered from the current context's preview mode. If the
     * debug toolbar is showing and preview mode is enabled, there is no need
     * to invoke this function.
     */
    enablePreview(): RequestBuilder;
    /**
     * Adds the order object to the current request. This should be invoked only
     * on the order confirmation page.
     *
     * @param {Order} order the details of the order that was placed
     */
    addOrderData(order: Order): RequestBuilder;
    setMailRef(refMail: string, recRef: string): RequestBuilder;
    populateFrom(params: {
        data: TaggingData;
        forcedSegments: string[];
    }, unwrappedReference?: string): RequestBuilder;
    setRecommendationRef(recRef: string, recRefSrc?: string): RequestBuilder;
    /**
     * Builds the request and makes a request to Nosto.
     *
     * @deprecated since there is already a load method that does the same
     * @private
     * @param {RecommendationRequestFlags} flags
     * @return {Promise}
     *
     * @example
     * <caption>To load data for a single placement</caption>
     * nostojs(api => api
     *   .createRecommendationRequest()
     *   .send({metadata: true}))
     *   .then((response) => console.log(response));
     */
    send(flags: RecommendationRequestFlags): Promise<EventResponseMessage>;
    /**
     * Builds the request and makes a request to Nosto.
     *
     * @param {RecommendationRequestFlags} flags an object containing additional flags
     * @return {Promise} the response returned by Nosto
     *
     * @example
     * <caption>To load data for a single placement</caption>
     * nostojs(api => api
     *   .createRecommendationRequest()
     *   .addElements('bestseller-home')
     *   .load())
     *   .then((response) => console.log(response));
     */
    load(flags?: RecommendationRequestFlags): Promise<EventResponseMessage>;
    /**
     * Builds the request and invokes it via JSONP to load the cart popup
     * recommendations
     *
     * @deprecated since this method should de decoupled from the request
     * @private
     * @return {Promise}
     */
    loadCartPopupRecommendations(alwaysShow: boolean): Promise<EventResponseMessage>;
    /**
     * Legacy method used to reloading the recommendations. This method is a
     * simple wrapper around the other load method.
     *
     * @deprecated since the method name isn't aligned with it's behaviour
     * @private
     * @see {load}
     * @param {RecommendationRequestFlags} flags an object containing additional flags
     * @return {Promise}
     *
     * @example
     * <caption>To load data for a single placement</caption>
     * nostojs(api => api
     *   .createRecommendationRequest()
     *   .addElements('bestseller-home')
     *   .loadRecommendations())
     *   .then((response) => console.log(response));
     */
    loadRecommendations(flags?: RecommendationRequestFlags): Promise<EventResponseMessage>;
    /**
     * Adds attribution for the given product id to reference mappings
     *
     * @param refs
     * @returns
     */
    setRefs(refs: Record<string, string>): RequestBuilder;
    getEvents(): Event[];
    getData(): EventRequestMessageV1;
}

interface Attribution {
    recordAttribution: (event: Event) => Attribution;
    dumpData: () => EventTuple[];
    done: () => Promise<void>;
}

/**
 * The Session API provides a programmatic way to interact with the Nosto API that is
 * optimized for usage in SPA style web applications. The Session object maintains the session level
 * data such as the user's shopping cart, the currently logged in customer, the current variation
 * and provides function to execute actions such as viewing a product, category, cart, order etc.
 *
 * @group Core
 */
interface Session {
    /**
     * Enables the automatic campaign injection for the current action. By default, the
     * campaign injection is disabled.
     *
     * @returns {Action}
     */
    enableCampaignInjection(): Session;
    /**
     * Disables the automatic campaign injection for the current action. By default, the
     * campaign injection is disabled.
     *
     * @returns {Action}
     */
    disableCampaignInjection(): Session;
    /**
     * Sets the information about the user's current shopping cart.
     * You may also pass undefined to signify that there was no change in the cart.
     * In case of actual cart contents pass in the shopping cart content in its entirety as
     * partial content are not supported.
     *
     * @param {Cart|undefined} cart the details of the user's shopping cart contents
     * @returns {Session} the current session
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setCart({
     *     items: [
     *       product_id: "101",
     *       sku_id: "101-S",
     *       name: "Shoe",
     *       unit_price: 34.99
     *       price_currency_code: "EUR"
     *     ]
     *   })
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .update()
     *   .then(data => console.log(data)))
     */
    setCart(cart: Cart | undefined): Session;
    /**
     * Sets the information about the currently logged in customer. If the current
     * customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
     *
     * @param {Customer} customer the details of the currently logged in customer
     * @returns {Session} the current session
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setCustomer({
     *     first_name: "Mridang",
     *     last_name: "Agarwalla",
     *     email: "mridang@nosto.com",
     *     newsletter: false,
     *     customer_reference: "5e3d4a9c-cf58-11ea-87d0-0242ac130003"
     *   })
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    setCustomer(customer: PushedCustomer | undefined): Session;
    /**
     * Sets the current variation identifier for the session. A variation identifier
     * identifies the current currency (or the current customer group). If your site
     * uses multi-currency, you must provide the ISO code current currency being viewed.
     *
     * @param {String} variation the case-sensitive identifier of the current variation
     * @returns {Session} the current session
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setVariation("GBP")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    setVariation(variation: string | undefined): Session;
    /**
     * Sets the restore link for the current session. Restore links can be leveraged
     * in email campaigns. Restore links allow the the user to restore the cart
     * contents in a single click.
     * <br/><br/>
     * Read more about
     * {@link https://help.nosto.com/en/articles/664692|how to leverage the restore cart link}
     *
     * @param {String} restoreLink the secure URL to restore the user's current session
     * @returns {Session} the current session
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setRestoreLink("https://jeans.com/session/restore?sid=6bdb69d5-ed15-4d92")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    setRestoreLink(restoreLink: string): Session;
    /**
     * Sets the response type to HTML or JSON_ORIGINAL. This denotes the preferred
     * response type of the recommendation result.
     * If you would like to access the raw recommendation data in JSON form, specify
     * JSON. When you specify JSON, you will need to template the result yourself.
     * If you require a more simplified approach, specify HTML. When you specify
     * HTML, you get back HTML blobs, that you may simply inject into
     * you placements.
     *
     * @param {String} mode the response mode for the recommendation data
     * @returns {Session} the current session
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setResponseMode("HTML")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    setResponseMode(mode: RenderMode): Session;
    /**
     * Create a new action for a front page. This should be used when the user
     * visits the home page.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewFrontPage()
     *   .setPlacements(["best-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewFrontPage(): Action;
    /**
     * Create a new action for a cart page. This should be used on all cart and
     * checkout pages. If your site has a multi-step checkout, it is recommended
     * that you send this event on each checkout page.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewCart(): Action;
    /**
     * Create a new action for a not found page. This should be used only on 404
     * pages.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewNotFound()
     *   .setPlacements(["best-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewNotFound(): Action;
    /**
     * Create a new action for a product page. This must be used only when a
     * product is being viewed. In case a specific SKU of the product is being viewed, use viewProductSku instead.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @param product
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewProduct("101")
     *   .setCategories(["/men/trousers"])
     *   .setRef("123", "example_reco_id")
     *   .setPlacements(["cross-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewProduct(product: string | Product): Action;
    /**
     * Create a new action for a product page when a specific SKU has been chosen. This must be used only when a
     * product and specific SKU is being viewed.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @param productId
     * @param skuId
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewProductSku("101", "101-sku-1")
     *   .setCategories(["/men/trousers"])
     *   .setRef("123", "example_reco_id")
     *   .setPlacements(["cross-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewProductSku(productId: string, skuId: string): Action;
    /**
     * Create a new action for a category page. This should be used on all
     * category, collection of brand pages.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @param {Array<String>} categories
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCategory("/men/shoes")
     *   .setPlacements(["category123"])
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewCategory(...categories: string[]): Action;
    /**
     * Create a new action for a tag page. This should be used only on tag pages.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     * Note: tags are not case-sensitive.
     *
     * @deprecated as this is an advanced action with a limited a use case
     * @param {Array<String>} tags the set of the tags being viewed.
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewTag("colourful")
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewTag(...tags: string[]): Action;
    /**
     * Create a new action with custom fields.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     * Note: tags are not case-sensitive.
     *
     * @deprecated as this is an advanced action with a limited a use case
     * @param {Object} customFields custom fields being viewed.
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCustomField({material: "cotton"})
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewCustomField(customFields: Record<string, string[]>): Action;
    /**
     * Create a new action for a search page. This should be used only
     * on search pages. A search page action requires you to pass the search
     * term. For example, if the user search for "black shoes", you must pass
     * in "black shoes" and not an encoded version such as "black+shoes".
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     * Search terms are not case-sensitive.
     *
     * @param {Array.<String>} searchTerms the non-encoded search terms
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewSearch("black shoes")
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewSearch(...searchTerms: string[]): Action;
    /**
     * Create a new action for a general page. This should be used only on
     * pages that don't have a corresponding action. For example, if the user
     * is viewing a page such as a "Contact Us" page, you should use the viewOther
     * action.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     *
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewOther()
     *   .load()
     *   .then(data => console.log(data)))
     */
    viewOther(): Action;
    /**
     * Create a new action for an order page. This should only be used on order
     * confirmation / thank you pages.
     * <br/><br/>
     * You do not need to specify the page-type explicitly as it is inferred
     * from the action.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Order} order the information about the order that was placed
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => {
     *   api.defaultSession()
     *    .addOrder({
     *      external_order_ref: "145000006",
     *      info: {
     *        order_number: "195",
     *        email: "mridang@nosto.com",
     *        first_name: "Mridang",
     *        last_name: "Agarwalla",
     *        type: "order",
     *        newsletter: true
     *      },
     *      items: [{
     *        product_id: "406",
     *        sku_id: "243",
     *        name: "Linen Blazer (White, S)",
     *        quantity: 1,
     *        unit_price: 455,
     *        price_currency_code: "EUR"
     *      }]
     *    })
     *    .setPlacements(["order-related"])
     *    .load()
     *    .then(data => {
     *      console.log(data.recommendations);
     *    })
     *  })
     */
    addOrder(order: WebsiteOrder): Action;
    /**
     * Creates an action to report that product was added to the shopping cart,
     * e.g. from the recommendation slot with "Add to cart" button.
     * <p>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param product
     * @param element
     * @returns {Action} the action instance to load content or track events.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .reportAddToCart("123", "reco-slot-1")
     *   .load()
     *   .then(data => console.log(data)))
     */
    reportAddToCart(product: string, element: string): Action;
    /**
     * @param { EventType } type
     * @param { String } target
     * @param { String | undefined } [ref]
     * @param { String | undefined } [refSrc]
     * @return { Object }
     *
     * @example
     * nostojs(api => api
     *  .defaultSession()
     *  .recordAttribution("vp", "12345678", "123456")
     *  .done()
     *  .then(data => console.log(data))
     */
    recordAttribution(type: EventType, target: string, ref: string, refSrc: string): Attribution;
}
/**
 * Action in the Session API context means fetching recommendations for a specific view. For example when
 * a visitor navigates from the front page to a product view you would most likely fetch recommendations
 * related to a product. This would be considered as an Action. Setting the cart contents however would
 * not be considered as action.
 *
 * @group Core
 */
interface Action {
    /**
     * Handles click attribution for product recommendations.
     * This can be called when reporting a product view
     * to signal that the view is a result of a click on a recommendation.
     *
     * @param {String} productId currently viewed product's product id
     * @param {String} reference value of result_id from the recommendation response that was clicked
     * @return {Action}
     */
    setRef(productId: string, reference: string): Action;
    /**
     * Allows you to provide an additional recommender hint that a product is being
     * viewed.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {String} product the identifier of the product being viewed
     * @return {Action} the instance of the action
     */
    setProduct(product: string | Product): Action;
    /**
     * @deprecated
     * @param {Array<String>} products
     * @return {Action}
     */
    setProducts(products: (string | Product)[]): Action;
    /**
     * Sets the information about the user's current shopping cart. It the user
     * does not have any items in his shopping cart, you can pass null.
     * Passing null will nullify the user's shopping cart on Nosto's
     * end. You must also pass in the shopping cart content in it's entirety as
     * partial content are not supported.
     * <br/><br/>
     * It is not recommended to pass the current cart contents to an action but
     * instead use the the session
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @see {@link Session#setCart}
     * @return {Action}
     */
    setCart(cart: Cart | undefined): Action;
    /**
     * Sets the information about the currently logged in customer. If the current
     * customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
     * <br/><br/>
     * It is not recommended to pass the current customer details to an action but
     * instead use the the session
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @see {@link Session#setCustomer}
     * @param {Customer} customer the details of the currently logged in customer
     * @return {Action}
     */
    setCustomer(customer: PushedCustomer | undefined): Action;
    /**
     * @param {Order} order
     * @return {Action}
     */
    setOrder(order: WebsiteOrder): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param searchTerms
     * @return {Action}
     */
    setSearchTerms(searchTerms: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Array<String>} brands
     * @return {Action}
     */
    setBrands(brands: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Array<String>} categories
     * @return {Action}
     */
    setCategories(categories: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Array<String>} categoryIds
     * @return {Action}
     */
    setCategoryIds(categoryIds: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Array<String>} parentCategoryIds
     * @return {Action}
     */
    setParentCategoryIds(parentCategoryIds: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param tags
     * @return {Action}
     */
    setTags(tags: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param customFields
     * @return {Action}
     */
    setCustomFields(customFields: Record<string, string[]>): Action;
    /**
     * Sets the current variation identifier for the session. A variation identifier
     * identifies the current currency (or the current customer group). If your site
     * uses multi-currency, you must provide the ISO code current currency being viewed.
     * <br/><br/>
     * It is not recommended to pass the variation identifier to an action but
     * instead use the the session.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @see {@link Session#setVariation}
     * @param {String} variation the case-sensitive identifier of the current variation
     * @return {Action}
     */
    setVariation(variation: string | undefined): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @param {Array.<String>} placements
     * @return {Action}
     */
    setPlacements(placements: string[]): Action;
    /**
     * Sets the restore link for the current session. Restore links can be leveraged
     * in email campaigns. Restore links allow the the user to restore the cart
     * contents in a single click.
     * <br/><br/>
     * Read more about
     * {@link https://help.nosto.com/en/articles/664692|how to leverage the restore cart link}
     * <br/><br/>
     * It is not recommended to pass the restore link to an action but instead use the the
     * session.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @see {@link Session#setRestoreLink}
     * @param {String} restoreLink the secure URL to restore the user's current session
     * @return {Action}
     */
    setRestoreLink(restoreLink: string): Action;
    /**
     * Sets the identifier of the current page type to the current request. The different
     * page types are product, front, search, cart, order, category, notfound and other.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     * <br/><br/>
     * It is not recommended to pass the page type to an action but instead use the the
     * session.
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @see {@link Session#viewFrontPage} for when a front or home page is being viewed
     * @see {@link Session#viewCart} for when a cart or checkout page is being viewed
     * @see {@link Session#viewNotFound} for when a not-found or 404 page is being viewed
     * @see {@link Session#viewProduct} for when a product page is being viewed
     * @see {@link Session#viewCategory} for when a category, collection or brand page is being viewed
     * @see {@link Session#viewTag} for when a tag page is being viewed
     * @see {@link Session#viewSearch} for when a search page is being viewed
     * @see {@link Session#viewOther} for when a miscellaneous page is being viewed
     */
    setPageType(pageType: PageType): Action;
    /**
     * Sets the affinity signals for the current action.
     * Subsequent invocations will be merged with the previous ones.
     *
     * @param affinity
     * @param options
     */
    addAffinity(affinity: Record<string, string[]> | undefined, options?: AffinityOptions): Action;
    /**
     * @return {Object}
     * @hidden
     */
    dumpData(): TaggingData;
    update(): unknown;
    /**
     * Execute the action and fetch the recommendations for the current action.
     *
     * @param flags
     */
    load(flags?: RecommendationRequestFlags): Promise<ActionResponse>;
}
interface AffinityOptions {
    /**
     * If set to true, the current affinity signals will be cleared before setting the new ones.
     * Otherwise, the new signals will be appended to the existing ones, overriding the keys with the same name.
     *
     * @default false
     */
    clear?: boolean;
}
/**
 * Result object for an action that contains the recommendations and content that was requested for the current action.
 *
 * @group Core
 */
interface ActionResponse {
    /** Recommendations that were requested for the current action. */
    recommendations: Record<string, unknown>;
    /** Recommendations and content that was requested for the current action. */
    campaigns?: {
        recommendations: Record<string, unknown>;
        content: Record<string, unknown>;
    };
    /** Page view count  */
    page_views: number;
    /** Geo location metadarta  */
    geo_location: string[];
    /** Affinity metadata */
    affinities: CustomerAffinityResponse;
    /** Category Merchandising result id */
    cmpid: string;
}

type Maybe<T> = NonNullable<T> | undefined;
type Expect<T extends true> = T;

interface Store {
    getCustomerId(): Maybe<string>;
    setCustomerId(id: Maybe<string>): void;
}

interface Visits {
    getCustomerId(): Maybe<string>;
    setCustomerId(id: string | undefined): void;
    isDoNotTrack(): boolean;
    setDoNotTrack(dnt: boolean): boolean;
    setStore(s: Store): Store;
    setCustomerIdentifierService(s: Store): Store;
}

interface Placements {
    getPlacements(): string[];
    initialBody(): null | HTMLElement;
    injectCampaigns(campaigns: Record<string, string | AttributedCampaignResult>, targets?: Record<string, HTMLElement>): Promise<{
        filledElements: string[];
        unFilledElements: string[];
    }>;
    isFiltered(placement: DynamicPlacementDTO): boolean;
    isFilteringConfigured(placement: DynamicPlacementDTO): boolean;
    removeContent(divId: string): void;
    reset(): void;
}

type ParseUriResult = Pick<URL, "href" | "protocol" | "hostname" | "hash" | "search" | "searchParams">;

declare function clear(): void;
declare function isDebug(): boolean;
declare function isPreview(): boolean;
declare function setPreview(optArg: boolean): void;
declare function setRecotrace(optArg: boolean): void;
declare function setSkipCache(optArg: boolean): void;
declare function setDev(optArg: boolean): void;
declare function setDebugState(optArg: DebugRequestParamsDTO | undefined): void;
declare function isRecotraceEnabled(): boolean;
declare function skipCache(): boolean;
declare function getDebugState(): Maybe<DebugRequestParamsDTO>;
declare function isBot(): boolean;
declare const mode: {
    isPreview: typeof isPreview;
    setPreview: typeof setPreview;
    setRecotrace: typeof setRecotrace;
    setSkipCache: typeof setSkipCache;
    setDev: typeof setDev;
    setDebugState: typeof setDebugState;
    clear: typeof clear;
    isDebug: typeof isDebug;
    isRecotraceEnabled: typeof isRecotraceEnabled;
    skipCache: typeof skipCache;
    getDebugState: typeof getDebugState;
    isBot: typeof isBot;
};

type Mode = typeof mode;

/**
 * Callback function for nostojs
 *
 * @group Core
 */
type NostojsCallback = (api: API) => unknown;
type InitOptions = {
    responseMode?: RenderMode;
    disableAutoLoad?: boolean;
    disableRecommendations?: boolean;
};
/**
 * Main function to interact with the Nosto API.
 * The function receives a callback function as a parameter and executes it with the API object as a parameter.
 *
 * @group Core
 */
type nostojs = {
    (cb: NostojsCallback): Promise<unknown>;
    /** @hidden */
    q?: NostojsCallback[];
    /** @hidden */
    o?: InitOptions;
};

/**
 * @hidden
 */
interface Context {
    namespace: string;
    created: Date;
    domHasLoaded: boolean;
    loader: nostojs;
    initOptions?: InitOptions;
    /** @deprecated */
    updateSiteUrl: () => void;
    siteUrl: ParseUriResult;
    siteUrlCleaned: string;
    referer?: ParseUriResult;
    debugToken: string;
    mode: Mode;
    popupShown: boolean;
}

type PopupTrigger = "api" | "newCustomer" | "exitIntent" | "allCustomers" | "externalCampaign" | "abandonedCart";

interface PopupAttributes {
    coupon?: string;
    state?: string;
    campaignId?: string;
    checkout?: boolean;
}

declare function readPopupAttributes(): Record<string, PopupAttributes>;
declare function readPopupAttributes(popupId: string): PopupAttributes;

declare function writePopupAttribute<K extends keyof PopupAttributes>(popupId: string, key: K, val?: PopupAttributes[K] | null): void;

interface PopupEffect {
    opacity_min?: number;
    fadein_min?: number;
}
interface Condition {
    hide_on_desktop?: boolean;
    hide_on_mobile?: boolean;
    min_cart_value?: number;
    min_cart_size?: number;
    max_cart_value?: number;
    max_cart_size?: number;
    min_page_views?: number;
    max_page_views?: number;
    locations?: string[][];
    exc_locations?: string[][];
    categories?: string[];
    tags?: string[];
    brands?: string[];
    page_types?: string[];
    urls?: string[];
    exc_urls?: string[];
    referer_urls?: string[];
    url_parameters?: string[];
    enabledInJs?: boolean;
    enabled?: boolean;
    treat_url_conditions_as_filters?: boolean;
}
interface PopupCart {
    total: number;
    size: number;
}
interface ResponseData {
    ct?: number;
    cs?: number;
    pv?: number;
    gl?: string[];
}

declare function activateOverlay(): void;
declare function popupCampaigns(): {
    id: string;
    name: string;
    type: PopupTrigger | undefined;
}[] | undefined;
declare function getOverlay(): {
    sortedCampaignsWithType: () => (PopupTriggerSettingsDTO & {
        type?: PopupTrigger;
    })[];
    activate: () => void;
    campaignList: () => (PopupTriggerSettingsDTO & {
        type?: PopupTrigger;
    })[];
    openPopup: (popupId: string, opts?: {
        preview?: boolean;
        effects?: Record<string, unknown>;
    }) => string | undefined;
    enablePopup: (popupId: string) => void;
    disablePopup: (popupId: string) => void;
    setTriggers: (responseData: EventResponseMessage) => void;
    discountPopup: {
        instance: {
            internal: {
                showPopup(showPopupOptions: {
                    campaignId?: string;
                    popupId?: string;
                    effect: Partial<PopupEffect>;
                    trigger: PopupTrigger;
                    preview?: boolean;
                    cart?: PopupCart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: PopupTrigger) => void;
            okToOpen: (popupId: string, condition: Condition, responseData?: ResponseData) => boolean;
            openCheck: (popupId: string, condition?: Condition, responseData?: ResponseData) => string | null;
            stampOnCheckoutPage: () => void;
            openMinimized: () => void;
            done: (popupId: string) => void;
            writePopupAttribute: typeof writePopupAttribute;
            readPopupAttributes: typeof readPopupAttributes;
        } | null;
        preview(popupId: string, campaignId: string, effect?: PopupEffect): {
            internal: {
                showPopup(showPopupOptions: {
                    campaignId?: string;
                    popupId?: string;
                    effect: Partial<PopupEffect>;
                    trigger: PopupTrigger;
                    preview?: boolean;
                    cart?: PopupCart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: PopupTrigger) => void;
            okToOpen: (popupId: string, condition: Condition, responseData?: ResponseData) => boolean;
            openCheck: (popupId: string, condition?: Condition, responseData?: ResponseData) => string | null;
            stampOnCheckoutPage: () => void;
            openMinimized: () => void;
            done: (popupId: string) => void;
            writePopupAttribute: typeof writePopupAttribute;
            readPopupAttributes: typeof readPopupAttributes;
        };
    };
} | {
    activate(): void;
    campaignList(): (PopupTriggerSettingsDTO & {
        type?: PopupTrigger;
    })[];
    openPopup(): void;
    enablePopup(): void;
    disablePopup(): void;
    setTriggers(): void;
    discountPopup: {
        instance: {};
        preview(): void;
    };
    sortedCampaignsWithType?: undefined;
};
declare function openPopup(popupId: string, options: object): void;
declare function enablePopup(popupId: string): void;
declare function disablePopup(popupId: string): void;

/**
 * The Settings type defines merchant specific settings for the client script.
 *
 * @group Core
 */
interface Settings extends ClientScriptSettingsDTO {
    testing?: boolean;
    skuParam?: string;
    live?: boolean;
}
declare function modifySettings(updates: Partial<Settings>): void;

type ProductIdentifier = string | {
    productId: string;
    skuId?: string;
};
/**
 * Sends an event to Nosto when a recommended product is added to the cart.
 * @param product - The product identifier.
 * @param recoId - The recommendation identifier.
 */
declare function reportAddToCart(product: ProductIdentifier, recoId: string): Promise<void>;

declare function reportCouponGiven(campaignId: string, couponCode: string, couponUsed: boolean): Promise<void>;

declare function addSegment(segment: string): Promise<void>;

declare function addAffinitySignals(signals: Record<string, string[]>): Promise<void>;

declare function findProducts(): Product[];

declare function findCustomer(): PushedCustomer | undefined;

declare function findCart(): Cart | undefined;

declare function findOrder(): WebsiteOrder | undefined;

declare function findPluginVersions(): PluginMetadata | undefined;

declare function findCurrentVariation(): Maybe<string>;
declare function findSearchTerms(): Maybe<string[]>;
declare function findCurrentCategories(): Maybe<string[]>;
declare function findCurrentBrands(): Maybe<string[]>;
declare function findCurrentCategoryIds(): Maybe<string[]>;
declare function findCurrentParentCategoryIds(): Maybe<string[]>;
declare function findCurrentTags(): Maybe<string[]>;
declare function findCurrentCustomFields(): Maybe<Record<string, string[]>>;
declare function findRestoreLink(): Maybe<string>;
declare function findAffinitySignals(): Maybe<Record<string, string[]>>;
declare function findPageType(): Maybe<PageType>;
declare function findSortOrder(): Maybe<string>;
declare function findElements(ignoredPlacements: string[]): Maybe<string[]>;

declare function pageTagging(): TaggingData;
declare function pageTaggingAsync(): Promise<TaggingData>;
declare const taggingProviders: {
    products: typeof findProducts;
    cart: typeof findCart;
    customer: typeof findCustomer;
    order: typeof findOrder;
    searchTerms: typeof findSearchTerms;
    brands: typeof findCurrentBrands;
    categories: typeof findCurrentCategories;
    categoryIds: typeof findCurrentCategoryIds;
    parentCategoryIds: typeof findCurrentParentCategoryIds;
    tags: typeof findCurrentTags;
    customFields: typeof findCurrentCustomFields;
    variation: typeof findCurrentVariation;
    pluginVersion: typeof findPluginVersions;
    elements: typeof findElements;
    restoreLink: typeof findRestoreLink;
    affinitySignals: typeof findAffinitySignals;
    pageType: typeof findPageType;
    sortOrder: typeof findSortOrder;
};
type TaggingProviderOptions = {
    priority?: boolean;
};
type TaggingProviders = typeof taggingProviders;
type MaybeProvider<T extends keyof TaggingData> = TaggingProviders[T] | ReturnType<TaggingProviders[T]>;
declare function setTaggingProvider<T extends keyof TaggingData>(name: T, provider: MaybeProvider<T>, options?: TaggingProviderOptions): void;

/**
 * Resends all the tagging to Nosto. Only the page tagging is sent over
 * and nothing else - no placements, no events, nothing.
 * This method was originally used by the Magento 2 plugin. In the Magento 2 plugin
 * the order tagging was loaded asynchronously so a method like this was needed.
 */
declare function resendAllTagging(): Promise<void>;

declare function createSession(): Session;
declare function defaultSession(): Session;

/**
 * Resends the cart tagging to Nosto. Only the cart information is sent over
 * and nothing else - no placements, no events, nothing.
 * This method was originally used by the Magento 2 plugin. In the Magento 2 plugin
 * the cart tagging is loaded asynchronously so a method like this was needed.
 * @return {Promise}
 */
declare function resendCartTagging(): Promise<void>;
/**
 * Resends the customer tagging to Nosto. Only the c  ustomer information is sent over
 * and nothing else - no placements, no events, nothing.
 * This method was originally used by the Magento 2 plugin. In the Magento 2 plugin
 * the customer tagging is loaded asynchronously so a method like this was needed.
 *
 * @return {Promise}
 */
declare function resendCustomerTagging(): Promise<void>;

/**
 * @group Search
 */
type SearchHit = {
    productId: string;
    url?: string;
} & Record<string, unknown>;
/**
 * @group Search
 */
type SearchTrackOptions = "serp" | "autocomplete" | "category";
/**
 * @group Search
 */
type SearchAnalyticsOptions = {
    isKeyword?: boolean;
};
/**
 * @group Search
 */
type Endpoint = "impression" | "click";
/**
 * @group Search
 */
type AnalyticsType = "search" | "category";

/**
 *
 *
 * Boost products that match the provided filter.
 * Parameter groups are sent based on match type that you are using.
 *
 * Numeric field match - boosts products based on numeric value stored.
 * Example - boost products with higher price:
 * ```
 * {
 *  "field": "price",
 *  "weight": 0.1
 * }
 * ```
 *
 * Other boost matches use filter format. Send filter parameters together with `weight` param, to boost matched products.
 * Check `InputSearchFilter` type for more info on filter format.
 *
 * Example - use value filter to match `red` products and boost their score by 2:
 * ```
 * {
 *  "field": "customFields.color",
 *  "value": [ "red" ],
 *  "weight": 2
 * }
 * ```
 *
 * @group Search
 */
interface InputSearchBoost {
    /** Joins nested filters with logical AND */
    all?: InputSearchFilter[];
    /** Joins nested filters with logical OR */
    any?: InputSearchFilter[];
    /** Product field to apply filter on */
    field?: string;
    /**
     *
     * If `true`, matches all products which have the value on selected field.
     * If `false`, matches all products which have no value in selected field.
     *
     */
    hasValue?: boolean;
    /** Joins nested filters with logical AND and inverts match */
    not?: InputSearchFilter[];
    /** List of prefixes to match */
    prefix?: string[];
    /** List of range filters to apply */
    range?: InputSearchRangeFilter[];
    /** List of values to filter by, joined by OR operator */
    value?: string[];
    /** boost weight */
    weight: number;
}
/**
 *
 *
 * Add custom facets that are not configured in dashboard.
 *
 * There are 2 types of facets - `stats` and `terms`
 *
 * Terms facet is used to get all values for a field with their counts.
 * Example - get all available colors
 * ```
 * {
 *   "type": "terms",
 *   "field": "customFields.item_color",
 *   "order": "index",
 *   "name": "Color"
 * }
 * ```
 *
 * Stats facet is used to calculate min and max values for a numeric field.
 * Example - calculate price range of products
 * ```
 * {
 *   "id": "facet-id",
 *   "field": "price",
 *   "name": "Price",
 *   "type": "stats"
 * }
 * ```
 *
 * @group Search
 */
interface InputSearchFacetConfig {
    /** If facet is disabled, it won't be calculated. Used to disable facets created in dashboard */
    enabled?: boolean;
    /** Field on which facet will be calculated */
    field?: string;
    /** Facet ID */
    id: string;
    /** Adds a infix filter on facet's terms. Only applies if type is `terms`. Cannot be combined with prefix */
    infix?: string[];
    /** This name is returned with search response. Used as a display name in frontend */
    name?: string;
    /** Returned facet order. Only applies if type is `terms` */
    order?: SearchFacetOrder;
    /** Returned facet position in search response facets array */
    position?: number;
    /** Adds a prefix filter on facet's terms. Only applies if type is `terms`. Cannot be combined with infix */
    prefix?: string[];
    /** How many facet terms to return. Only applies if type is `terms` */
    size?: number;
    /** Facet type */
    type?: SearchFacetType;
}
/**
 *
 *
 * Filters out products that don't match this filter.
 * Parameters groups are sent based on match type that you are using.
 * Only send parameters which belong to the filter type you are using.
 *
 * Exists match - matches products that have the provided field.
 * Example - match only products which are on sale
 * ```
 * {
 *  "field": "customFields.on-sale",
 *  "hasValue": true
 * }
 * ```
 *
 * Prefix match - matches products that have one of provided prefixes.
 * This match type should only be used for debugging.
 * Example - match `green` and `greenish` color
 * ```
 * {
 *  "field": "customFields.color",
 *  "prefix": [ "green" ]
 * }
 * ```
 *
 * Value match - matches products if they match any of provided values.
 * Example - match products which are red:
 * ```
 * {
 *  "field": "customFields.color",
 *  "value": [ "red" ]
 * }
 * ```
 *
 * Range match - matches products if value is in the specified range.
 * Example - match products with price 10 <= price < 100
 * ```
 * {
 *  "field": "price",
 *  "range": [
 *    {
 *      "gte": "10",
 *      "lt": "100"
 *    }
 *  ]
 * }
 * ```
 *
 * Logical match - matches products if nested filters satisfy the condition.
 *
 * Example - match samsung and apple products:
 * ```
 * {
 *   "any": [ // logical OR
 *     {
 *       "field": "brand",
 *       "value": [ "apple" ]
 *     },
 *     {
 *       "field": "brand",
 *       "value": [ "samsung" ]
 *     }
 *   ]
 * }
 *
 * // this is the same as using value match with multiple values
 *
 * {
 *   "field": "brand",
 *   "value": [ "apple", "samsung" ]
 * }
 * ```
 *
 * Example - match samsung or apple phones:
 * ```
 * {
 *   "all": [ // logical AND
 *     {
 *       "field": "brand",
 *       "value": [ "apple", "samsung" ]
 *     },
 *     {
 *       "field": "customFields.item-type",
 *       "value": [ "phone" ]
 *     }
 *   ]
 * }
 * ```
 *
 * Example - match non apple products:
 * ```
 * {
 *   "not": [ // logical NOT
 *     {
 *       "field": "brand",
 *       "value": [ "apple" ]
 *     }
 *   ]
 * }
 * ```
 *
 * Logical filters can have any filter type in their nested array.
 * That means that logical filters can nest other logical filters.
 * Example - match all apple or samsung products, which cost more than a 100 or are bestsellers
 * ```
 * {
 *   "all": [
 *     {
 *       "field": "brand",
 *       "value": [ "apple" ]
 *     },
 *     {
 *       "any": [
 *         {
 *           "field": "price",
 *           "range": {
 *             "gt": "100"
 *           }
 *         },
 *         {
 *           "field": "customFields.best-seller",
 *           "hasValue": true
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 *
 * @group Search
 */
interface InputSearchFilter {
    /** Joins nested filters with logical AND */
    all?: InputSearchFilter[];
    /** Joins nested filters with logical OR */
    any?: InputSearchFilter[];
    /** Product field to apply filter on */
    field?: string;
    /**
     *
     * If `true`, matches all products which have the value on selected field.
     * If `false`, matches all products which have no value in selected field.
     *
     */
    hasValue?: boolean;
    /** Joins nested filters with logical AND and inverts match */
    not?: InputSearchFilter[];
    /** List of prefixes to match */
    prefix?: string[];
    /** List of range filters to apply */
    range?: InputSearchRangeFilter[];
    /** List of values to filter by, joined by OR operator */
    value?: string[];
}
/**
 *
 * Provide tags for highlighting keyword results
 *
 * For example if you want to highlight results with <mark> and </mark> tags, you should provide:
 * ```
 * {
 *   "preTag": "<mark>",
 *   "postTag": "</mark>"
 * }
 * ```
 *
 * which will result in:
 * ```
 * <mark>highlighted keyword</mark> rest of the text
 * ```
 *
 * @group Search
 */
interface InputSearchHighlight {
    postTag: string;
    preTag: string;
}
/**
 * @group Search
 */
interface InputSearchKeywords {
    /** List of custom boosts */
    boost?: InputSearchBoost[];
    /** Matches all objects if query is not provided or empty. Defaults to false. */
    emptyQueryMatchesAll?: boolean;
    /** List of filters. Values are joined with AND operator */
    filter?: InputSearchTopLevelFilter[];
    /** Offset of returned keyword list. Used for pagination, use together with `size` parameter */
    from?: number;
    /** Highlight tag */
    highlight?: InputSearchHighlight;
    /** How many keywords will be returned */
    size?: number;
    /** Sets how results should be sorted. After sorting by all the options provided in sort param, or in case sort param is not set, results will be sorted by relevance.  */
    sort?: InputSearchSort[];
}
/**
 *
 *
 * Used to change positions of returned products.
 * Pinning rearranges returned product positions, which means that if product is not returned with search results, it won't be pinned.
 *
 * @group Search
 */
interface InputSearchPin {
    /** Which product field will be used to match value on. If not provided, `productId` is used */
    field?: string;
    /** Where the pinned product will appear on the search page. Starts from 1 */
    position: number;
    /** If product field matches any of the provided values, pin will be applied. Currently, only exact match of values is supported */
    value: string[];
}
/**
 * @group Search
 */
interface InputSearchProducts {
    /** List of custom boosts */
    boost?: InputSearchBoost[];
    /** Provide category id if search engine is used to get results for category pages. provide either `categoryId` or `categoryPath`, don't use both */
    categoryId?: string;
    /** Provide category path if search engine is used to get results for category pages. provide either `categoryId` or `categoryPath`, don't use both */
    categoryPath?: string;
    /** Returns only one result for each unique value for provided field. Can be used to group product variations (e.g. different colors) */
    collapse?: string;
    /** Enables to add or modify facet configuration on query time. If facet with the same ID is present in the dashboard configuration, their parameters will be merged. In that case, only partial facet parameters can be provided. If facet is not present in the configuration, all required params must be present. */
    customFacets?: InputSearchFacetConfig[];
    /** Matches all objects if query is not provided or empty. Defaults to true if no name provided, false for serp and autocomplete */
    emptyQueryMatchesAll?: boolean;
    /** `(Private key only)` Overwrite default exclusions behavior */
    exclusionBehaviour?: SearchExclusionBehaviour;
    /** List of facet ID's, the ones configured in the dashboard, to be counted. The search engine will automatically filter out irrelevant facets depending on search queries, so not all facets listed here may be returned. `*` selects all facets */
    facets?: string[];
    /** List of filters. Values are joined with AND operator */
    filter?: InputSearchTopLevelFilter[];
    /** Offset of returned product list. Used for pagination, use together with `size` parameter */
    from?: number;
    /** `(Private key only)` Overwrite default out of stock behavior */
    outOfStockBehaviour?: SearchOutOfStockBehaviour;
    /** Used to provide brand, category, and other affinities from Nosto personalization frontend script. These will be different for each user */
    personalizationBoost?: InputSearchBoost[];
    /** Personalization impact in comparison to relevance and other boosts */
    personalizationWeight?: number;
    /** Used to change positions of returned products. Pinning rearranges returned product positions, which means that if product is not returned with search results, it won't be pinned */
    pin?: InputSearchPin[];
    /** Same format as filter, but is always applied before counting facets. `excludeFacets` param is not allowed */
    preFilter?: InputSearchFilter[];
    /**
     * Queries data only from searchable fields with specified priorities. Use [ `high`, `medium`, `low` ] for serp.
     * Use [ `high`, `medium` ] for autocomplete
     */
    queryFields?: SearchQueryField[];
    /** How much weight has relevance in comparison to other scores (e.g. boost) */
    relevanceWeight?: number;
    /** `(Private key only)` Allow private fields to be returned in search results and used in query parameters */
    showPrivateFields?: boolean;
    /** How many products will be returned */
    size?: number;
    /** Sets how results should be sorted. After sorting by all the options provided in sort param, or in case sort param is not set, results will be sorted by relevance. For example, if you set sort by availability status, products with the same availability status will be sorted by relevance. */
    sort?: InputSearchSort[];
    /** Selects product variation */
    variationId?: string;
    /** Selects product currency */
    currency?: string;
}
/**
 * @group Search
 */
interface InputSearchQuery {
    /** Your account ID */
    accountId?: string;
    /** Any custom rules that should be added in this search request. These rules are appended to the rule list defined in nosto dashboard */
    customRules?: InputSearchRule[];
    /** `(Private key only)` Returns scoring information for each object if true. This should only be used for debugging as performance will suffer. If not needed, omit this parameter */
    explain?: boolean;
    /** Keyword specific parameters */
    keywords?: InputSearchKeywords;
    /** Product specific parameters */
    products?: InputSearchProducts;
    /** Search text (raw user input) */
    query?: string;
    redirect?: string;
    /** List of rule ID's or ID matching patterns with wildcards. Patterns [ `global-*`, `query-*` ] should be used here to match all rules created in dashboard */
    rules?: string[];
    /** Segment ID's user belongs to */
    segments?: string[];
    sessionParams?: InputSearchQuery;
    abTests?: InputSearchABTest[];
    /** `(Private key only)` Overwrites current time. Used to trigger scheduled rules ahead of schedule */
    time?: number;
}
/**
 * @group Search
 */
interface InputSearchABTest {
    id: string;
    activeVariation: InputSearchABTestVariation;
}
/**
 * @group Search
 */
interface InputSearchABTestVariation {
    id: string;
}
/**
 *
 *
 * Range filter - provide different parameter combinations to define type of ranges.
 * All parameters accept stringified float numbers.
 *
 * Fully bounded range example: 10 < range < 100
 * ```
 * {
 *   "gt": "10",
 *   "lt": "100"
 * }
 * ```
 *
 * Upper bounded range example: range < 100
 * ```
 * {
 *   "lt": 100
 * }
 * ```
 *
 * Lower bounded range example: range => 10
 * ```
 * {
 *   "gte": 10
 * }
 * ```
 *
 * @group Search
 */
interface InputSearchRangeFilter {
    /** Greater than */
    gt?: string;
    /** Greater than or equals */
    gte?: string;
    /** Lower than */
    lt?: string;
    /** Lower than or equals */
    lte?: string;
}
/**
 * Rules allow search query modification based on search parameters
 * @group Search
 * */
interface InputSearchRule {
    /** Used to disable rules creating through dashboard */
    enabled?: boolean;
    id: string;
    /** Condition that must be met for query to match */
    match?: InputSearchRuleMatch;
    /** User friendly name */
    name?: string;
    /** Defines when the rule will be applied based on date/time */
    schedule?: InputSearchSchedule[];
    /** Search query parameters that will be set if rule matches. Same format as search query itself but not all params are allowed */
    set?: InputSearchQuery;
}
/**
 *
 *
 * Rule match specifies when the rule will be applied.
 * Parameters groups are sent based on match type that you are using.
 * Only send parameters which belong to the filter type you are using.
 *
 * Everything match - matches every time. Used for global rules that should be applied on every request
 * Example:
 * ```
 * {
 *   "everything": true
 * }
 * ```
 *
 * Param match - extracts value from specified search request param and compares it to expected value.
 * If param value matches expected value, the rule is applied.
 * Values are preprocessed before comparing them (lowercased, phrases split into tokens, etc.).
 * Both input values and expected values are preprocessed using the same logic before comparison.
 * At least one item from expected value array must match for the rule to match as a whole.
 *
 * Example - apply rule when user searches for `battery`
 * ```
 * // user's search request
 * {
 *   "query": "battery",
 *   ...
 * }
 *
 * // rule
 * {
 *   "param": "query",
 *   "value": ["battery"]
 * }
 * ```
 *
 * In this case, no function was used, so values were processed minimally and exact match was applied.
 * You can change this behavior using one of available functions
 *
 * Param Stem match - used when you want to use exact match but you want to match different variations of the word.
 * In the previous example, rule would match with search query `battery`, but will not with `batteries`.
 * To solve his, provide stem match function:
 * ```
 * {
 *   "param": "query",
 *   "value": ["battery"],
 *   "function": "stemmed"
 * }
 * ```
 *
 * Param Contains match - used if you care about terms appearing in search query but don't care about order.
 * Values are processed in the same way as if no function was provided. Matching is done using contains match.
 * If you have a rule:
 * ```
 * {
 *   "param": "query",
 *   "value": ["battery"],
 *   "function": "contains"
 * }
 * ```
 * It will match with search query `battery`, `A4 battery`, `Li-ion battery`, etc.
 *
 *
 * Param Stemmed Contains match - values are stemmed and applies a contains match.
 * With rule:
 * ```
 * {
 *   "param": "query",
 *   "value": ["battery"],
 *   "function": "stemmedContains"
 * }
 * ```
 * You will be able to match `battery`, `batteries`, `batteries for sale`, `strong battery`, etc.
 *
 * Last type of match is logical match. It works the same way as `InputSearchFilter` logical match does.
 *
 *
 * Logical AND - Used when multiple conditions need to be met for rule to match
 * Example:
 * ```
 * {
 *   "all": [
 *     // nested match conditions
 *   ]
 * }
 * ```
 *
 * Logical AND - Used when one of the conditions need to be met for rule to match:
 * Example:
 * ```
 * {
 *   "any": [
 *     // nested match conditions
 *   ]
 * }
 * ```
 *
 * Exclude match - Used when you want to negate a match condition
 * Example:
 * ```
 * {
 *   "not": {
 *       // match condition
 *   }
 * }
 * ```
 *
 * @group Search
 */
interface InputSearchRuleMatch {
    /** Applies logical AND to nested rule match clauses. Matches if all of them match */
    all?: InputSearchRuleMatch[];
    /** Applies logical OR to nested rule match clauses. Matches if any of them match */
    any?: InputSearchRuleMatch[];
    /** If set to `true`, rule will always match. Skip this parameter if it's not needed, does not accept `false` value. Used to create global rules in dashboard */
    everything?: boolean;
    /** Expected values to be compared against. Rule matches if at least one of them matches */
    function?: SearchParamComparisonFunction;
    /** Applies logical NOT to rule match clause. Matches if nested clause does not match */
    not?: InputSearchRuleMatch;
    /** Param from search query from where the value will be extracted */
    param?: string;
    /** Expected values to be compared against. Rule matches if at least one of them matches */
    value?: string[];
}
/**
 * Defines when the rule will be applied based on date/time
 * @group Search
 * */
interface InputSearchSchedule {
    /** Date in format `yyyy-MM-dd'T'HH:mm:ss`. Only applies if type is `ONE_TIME` */
    from?: string;
    /** Format example `12:00:00`. Only applies if type is `weekly` */
    fromTime?: string;
    /** Format example `Europe/Paris` */
    timezone?: string;
    /** Date in format `yyyy-MM-dd'T'HH:mm:ss`. Only applies if type is `ONE_TIME` */
    to?: string;
    /** Format example `16:00:00`. Only applies if type is `weekly` */
    toTime?: string;
    type?: SearchRuleScheduleType;
    /** Array of days to trigger the rule. Only applies if type is `weekly` */
    weekDays?: SearchRuleScheduleWeekday[];
}
/**
 *
 *
 * Sets how results should be sorted.
 * After sorting by all the options provided in sort param,
 * or in case sort param is not set, results will be sorted by relevance.
 * For example, if you set sort by availability status,
 * products with the same availability status will be sorted by relevance.
 *
 * @group Search
 */
interface InputSearchSort {
    field: string;
    order: SearchSortOrder;
}
/**
 * Same as `InputSearchFilter` type, but accepts an additional optional parameter `excludeFacets`
 * @group Search
 * */
interface InputSearchTopLevelFilter {
    /** Joins nested filters with logical AND */
    all?: InputSearchFilter[];
    /** Joins nested filters with logical OR */
    any?: InputSearchFilter[];
    /** List of facet ID's to which this filter should not be applied. (default: all facets with the same field as filter if filter contains field, otherwise empty) */
    excludeFacets?: string[];
    /** Product field to apply filter on */
    field?: string;
    /**
     *
     * If true, matches all products which have the value on selected field.
     * If false, matches all products which have no value in selected field.
     *
     */
    hasValue?: boolean;
    /** Joins nested filters with logical AND and inverts match */
    not?: InputSearchFilter[];
    /** List of prefixes to match */
    prefix?: string[];
    /** List of range filters to apply */
    range?: InputSearchRangeFilter[];
    /** List of values to filter by, joined by OR operator */
    value?: string[];
}
/**
 * Query search engine for search results
 * @group Search
 * */
interface Query {
    search?: SearchResult;
}
/**
 * Query search engine for search results
 * @group Search
 * */
interface QuerySearchArgs {
    accountId?: string;
    customRules?: InputSearchRule[];
    explain?: boolean;
    keywords?: InputSearchKeywords;
    products?: InputSearchProducts;
    query?: string;
    redirect?: string;
    rules?: string[];
    segments?: string[];
    sessionParams?: InputSearchQuery;
    time?: number;
}
/**
 * @group Search
 */
interface SearchAutocorrect {
    /** Original query value before autocorrect */
    original: string;
}
/**
 * Determines how excluded products are handled
 * @group Search
 * */
type SearchExclusionBehaviour = 
/** Moves excluded products to the end of search results */
"deboost"
/** Hides excluded products */
 | "hide"
/** Does not handle excluded products in any special way */
 | "none";
/**
 * Gives additional info on why search results are the way they are.
 * @group Search
 * */
interface SearchExplain {
    /** Matched rules are returned */
    matchedRules: SearchExplainRule[];
}
/**
 * @group Search
 */
interface SearchExplainRule {
    id: string;
    /** Name of the rule that matched */
    name?: string;
    /** JSON object scalar, parse on frontend. Which params were set after triggering query rule */
    set?: unknown;
}
/**
 * @group Search
 */
type SearchFacet = SearchStatsFacet | SearchTermsFacet;
/**
 * Returned facet order. Only applies if facet type is `terms`
 * @group Search
 * */
type SearchFacetOrder = 
/** Order by term count */
"count"
/** Order by term name */
 | "index";
/**
 * @group Search
 */
interface SearchFacetTerm {
    /** How many products had this term */
    count: number;
    /** Was this term selected, to add selected checkbox in frontend */
    selected: boolean;
    /** Term value */
    value: string;
    visual?: SearchFacetValueVisual;
    position?: number;
}
/**
 * @group Search
 */
interface SearchFacetValueVisual {
    type: "color" | "thumbnail";
    value: string;
}
/**
 * Type of facet
 * @group Search
 */
type SearchFacetType = 
/** Returns min and max values for a numeric field */
SearchStatsFacet["type"]
/** Returns all unique terms in a field */
 | SearchTermsFacet["type"];
/**
 * @group Search
 */
interface SearchHighlight {
    keyword?: string;
}
/**
 * @group Search
 */
interface SearchKeyword {
    _explain?: unknown;
    _highlight?: SearchHighlight;
    _redirect?: string;
    _score?: number;
    facets: SearchFacet[];
    keyword: string;
    position?: number;
    /** @deprecated Use position instead. */
    priority: number;
    total: number;
}
/**
 * @group Search
 */
interface SearchKeywords {
    /** Unmodified request parameter `from` to be used for further pagination */
    from?: number;
    /** If main search query returned no results and fuzzy search was triggered */
    fuzzy?: boolean;
    /** Keyword list */
    hits: SearchKeyword[];
    /** Unmodified request parameter `size` to be used for further pagination */
    size?: number;
    /** How many products were found */
    total: number;
}
/**
 * Determines how out of stock products are handled
 * @group Search
 */
type SearchOutOfStockBehaviour = 
/** Moves out of stock products to the end of search results */
"deboost"
/** Hides out of stock products */
 | "hide"
/** Does not handle out of stock products in any special way */
 | "none";
/**
 * Defines how input values and expected values are compared
 * @group Search
 * */
type SearchParamComparisonFunction = 
/** Applies partial match on param value from expected values list */
"contains"
/** Applies stemming algorithm to param values and expected values and does an exact match of outputs */
 | "stemmed"
/** Applies stemming algorithm and does partial match on param value from expected values list */
 | "stemmedContains";
/**
 * @group Search
 */
interface SearchProduct {
    _explain?: unknown;
    _pinned?: boolean;
    _score?: number;
    affinities?: SearchProductAffinities;
    ageGroup?: string;
    ai?: SearchProductAiDetected;
    alternateImageUrls?: string[];
    alternateImageHashes?: string[];
    availability?: string;
    available?: boolean;
    brand?: string;
    categories?: string[];
    categoryIds?: string[];
    condition?: string;
    customFields?: SearchProductCustomField[];
    datePublished?: number;
    description?: string;
    extra?: SearchProductExtra[];
    gender?: string;
    googleCategory?: string;
    gtin?: string;
    /** Product image url */
    imageUrl?: string;
    imageHash?: string;
    inventoryLevel?: number;
    isExcluded?: boolean;
    listPrice?: number;
    /** Product Name */
    name?: string;
    onDiscount?: boolean;
    pid?: string;
    price?: number;
    priceCurrencyCode?: string;
    priceText?: string;
    productId?: string;
    ratingValue?: number;
    realVariantIds?: string[];
    reviewCount?: number;
    saleable?: boolean;
    skus?: SearchProductSku[];
    stats?: SearchProductStats;
    supplierCost?: number;
    tags1?: string[];
    tags2?: string[];
    tags3?: string[];
    /** Product thumbnail url */
    thumbUrl?: string;
    thumbHash?: string;
    unitPricingBaseMeasure?: number;
    unitPricingMeasure?: number;
    unitPricingUnit?: string;
    /** Product page url */
    url?: string;
    variantId?: string;
    variations?: SearchProductKeyedVariation[];
}
/**
 * @group Search
 */
interface SearchProductAiDetected {
    dominantColors?: string[];
    overridingColor?: string;
    primaryColor?: string;
}
/**
 * @group Search
 */
interface SearchProductAffinities {
    brand?: string;
    categories?: string[];
    color?: string[];
    size?: string[];
}
/**
 * @group Search
 */
interface SearchProductCustomField {
    key: string;
    value: string;
}
/**
 * @group Search
 */
interface SearchProductExtra {
    key: string;
    value: string[];
}
/**
 * @group Search
 */
interface SearchProductKeyedVariation {
    key: string;
    value: SearchVariationValue;
}
/**
 * @group Search
 */
interface SearchProductSku {
    ai?: SearchProductAiDetected;
    availability?: string;
    customFields?: SearchProductCustomField[];
    id?: string;
    imageUrl?: string;
    imageHash?: string;
    inventoryLevel?: number;
    listPrice?: number;
    name?: string;
    price?: number;
    priceText?: string;
    url?: string;
}
/**
 * @group Search
 */
interface SearchProductStats {
    age?: number;
    availabilityRatio?: number;
    buys?: number;
    cartRatio?: number;
    clicks?: number;
    conversion?: number;
    discount?: number;
    impressions?: number;
    inventoryLevel?: number;
    inventoryTurnover?: number;
    listPrice?: number;
    margin?: number;
    marginPercentage?: number;
    orders?: number;
    price?: number;
    profitPerImpression?: number;
    profitPerView?: number;
    published?: number;
    ratingValue?: number;
    revenue?: number;
    revenuePerImpression?: number;
    revenuePerView?: number;
    reviewCount?: number;
    views?: number;
}
/**
 * @group Search
 */
interface SearchProducts {
    /** Unmodified request parameter `categoryId` */
    categoryId?: string;
    /** Unmodified request parameter `categoryPath` */
    categoryPath?: string;
    /** Returns only one result for each unique value for provided field. Can be used to group product variations (e.g. different colors) */
    collapse?: string;
    /** Facet list */
    facets?: SearchFacet[];
    /** Unmodified request parameter `from` to be used for further pagination */
    from?: number;
    /** If main search query returned no results and fuzzy search was triggered */
    fuzzy?: boolean;
    /** Product list */
    hits: SearchProduct[];
    /** Unmodified request parameter `size` to be used for further pagination */
    size?: number;
    /** How many products were found */
    total: number;
}
/**
 * Searchable fields of priority
 * @group Search
 * */
type SearchQueryField = 
/** Searchable fields with `High` priority */
"high"
/** Searchable fields with `Low` priority */
 | "low"
/** Searchable fields with `Medium` priority */
 | "medium";
/**
 * AB tests variations
 * @group Search
 * */
interface ABTest {
    id: string;
    activeVariation: {
        id: string;
    };
}
/**
 * Search response
 * @group Search
 * */
interface SearchResult {
    /** Returned if autocorrect was triggered */
    autocorrect?: SearchAutocorrect;
    /** Gives additional info on why search results are the way they are. Returned if request was sent with `explain: true` parameter. */
    explain?: SearchExplain;
    /** Keywords response */
    keywords?: SearchKeywords;
    /** Product response */
    products?: SearchProducts;
    /** Search text the results were returned for */
    query?: string;
    /** Returns redirect url if redirect rule matched */
    redirect?: string;
    abTests?: ABTest[];
}
/**
 * @group Search
 */
type SearchRuleScheduleType = "ONE_TIME" | "WEEKLY";
/**
 * @group Search
 */
type SearchRuleScheduleWeekday = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";
/**
 * Order of the sort
 * @group Search
 */
type SearchSortOrder = "asc" | "desc";
/**
 * @group Search
 */
interface SearchStatsFacet {
    /** Numeric field for which min/max values were calculated */
    field: string;
    id: string;
    /** Maximum value of faceted field */
    max: number;
    /** Minimum value of faceted field */
    min: number;
    name: string;
    type: "stats";
}
/**
 * @group Search
 */
interface SearchTermsFacet {
    /** Facet term list */
    data: SearchFacetTerm[];
    /** Field from which terms were calculated */
    field: string;
    id: string;
    name: string;
    type: "terms";
}
/**
 * @group Search
 */
interface SearchVariationValue {
    availability?: string;
    listPrice?: number;
    price?: number;
    priceCurrencyCode?: string;
}
/**
 * @group Search
 */
type SearchPageType = "search" | "category" | "autocomplete";
/**
 * @group Search
 * @interface
 * */
type SearchQuery = Omit<InputSearchQuery, "keywords" | "products"> & {
    keywords?: InputSearchQuery["keywords"] & {
        fields: string[];
        facets: string[];
    };
    products?: InputSearchQuery["products"] & {
        fields?: string[];
        facets?: string[];
    };
} & {
    name?: string;
};
/**
 * @group Search
 */
type PersonalizationBoost = {
    field: string;
    value: string[];
    weight: number;
};
/**
 * @group Search
 */
type SearchSessionParams = {
    segments?: string[];
    products?: {
        personalizationBoost: PersonalizationBoost[];
    };
};
/**
 * @group Search
 * @interface
 * */
type SearchOptions = {
    redirect?: boolean;
    track?: SearchTrackOptions;
} & SearchAnalyticsOptions;

/**
 * Record search event, should be send on any search
 */
declare function recordSearch(type: SearchTrackOptions, query: SearchQuery, response: SearchResult, options?: SearchAnalyticsOptions): void;
/**
 * Record search submit event (e.g. search form submit). Required to track organic searches.
 */
declare function recordSearchSubmit(query: string): void;

/**
 * Record search click event
 */
declare function recordSearchClick(type: SearchTrackOptions, hit: SearchHit): Promise<void> | undefined;
declare function recordSearchAddToCart(type: SearchTrackOptions, hit: SearchHit): Promise<void>;

/**
 * Search function
 */
declare function search(query: SearchQuery, options?: SearchOptions): Promise<SearchResult>;

declare function getSearchSessionParams(): Promise<SearchSessionParams>;

type Level = "log" | "warn" | "error" | "debug" | "info";

interface Violation {
    key: string;
    message_key: string;
}
interface ErrorResponse {
    errors: Violation[];
}
interface OrderError {
    payload: WebsiteOrder;
    response: ErrorResponse;
}

/**
 * Payload for prerender event
 *
 * @group Core
 */
interface Prerender {
    customerId?: string;
    affinityScores: CustomerAffinityResponse;
    geoLocation: string[];
    eventDate: Date;
    pageViews: number;
    segments: SegmentsResponseBean;
}
/**
 * Payload for postrender event
 *
 * @group Core
 */
interface Postrender {
    responseData: Record<string, unknown>;
    filledElements: string[];
    unFilledElements: string[];
}
/**
 * Payload for setexperiments event
 *
 * @group Core
 */
interface Setexperiments {
    experiments: Experiment[];
}
/**
 * Payload for coupongiven event
 *
 * @group Core
 */
interface Coupongiven {
    coupon_code: string;
    coupon_campaign: string;
    coupon_used: boolean;
}
/**
 * Payload for scripterror event
 *
 * @group Core
 */
interface Scripterror {
    msg: string;
    stack?: string;
    level: Level;
}
/**
 * Payload for addtocart event
 *
 * @group Core
 */
interface Addtocart {
    productId: string;
    skuId?: string;
    placementId: string;
}
/**
 * Payload for carttaggingresent event
 *
 * @group Core
 */
interface Carttaggingresent {
    cart_items: CartItem[];
    restore_link?: string;
}
/**
 * Payload for setsegments event
 *
 * @group Core
 */
interface Segments {
    segment: string;
}
interface SearchSuccessEventDTO {
    query: SearchQuery;
    graphqlQuery: string;
    graphqlVariables: object;
    response: SearchResult;
}
interface SearchFailureEventDTO {
    query: SearchQuery;
    graphqlQuery: string;
    graphqlVariables: object;
    error: string;
}
/**
 * Payload for popupopened event
 *
 * @group Core
 */
interface Popupopened {
    campaignId: string;
    error?: unknown;
    type: "api" | string;
}
/**
 * Payload for popupmaximized, popupminimized, popupclosed and popupribbonshown events
 *
 * @group Core
 */
interface Popup {
    campaignId: string;
}
type LifecyleEvents = {
    prerequest: [EventRequestMessageV1];
    prerender: [Prerender];
    postrender: [Postrender];
    taggingsent: [EventResponseMessage];
    taggingresent: [TaggingData];
    carttaggingresent: [Carttaggingresent];
    customertaggingresent: [PushedCustomer];
    emailgiven: [PushedCustomer];
    scripterror: [Scripterror];
    servererror: [string[]];
};
type PopupEvents = {
    popupopened: [Popupopened];
    popupmaximized: [Popup];
    popupminimized: [Popup];
    coupongiven: [Coupongiven];
    popupclosed: [Popup];
    popupribbonshown: [Popup];
    sendabandonedcartemail: [object];
};
type InternalEvents = {
    ordererror: [OrderError];
    setexperiments: [Setexperiments];
    setsegments: [Segments];
    setcustomaffinities: [];
    setcart: [];
    addtocart: [Addtocart];
    ev1end: [];
    debugdata: [DebugToolbarDataDTO];
    searchsuccess: [SearchSuccessEventDTO];
    searchfailure: [SearchFailureEventDTO];
    searchclick: [SearchClick];
    searchaddtocart: [SearchClick];
    searchimpression: [SearchImpression];
    categoryclick: [CategoryClick];
    categoryaddtocart: [CategoryClick];
    categoryimpression: [CategoryImpression];
};
type TaggingEvents = {
    cartupdated: [];
};
/**
 * Mapping from event name to payload type
 *
 * @interface
 */
type EventMapping = LifecyleEvents & PopupEvents & InternalEvents & TaggingEvents;
/**
 * Keys of {@link EventMapping}
 */
type BusEvent = "prerequest" | "prerender" | "postrender" | "taggingsent" | "taggingresent" | "carttaggingresent" | "customertaggingresent" | "emailgiven" | "scripterror" | "servererror" | "popupopened" | "popupmaximized" | "popupminimized" | "coupongiven" | "popupclosed" | "popupribbonshown" | "sendabandonedcartemail" | "ordererror" | "setexperiments" | "setsegments" | "setcustomaffinities" | "setcart" | "addtocart" | "ev1end" | "debugdata" | "searchsuccess" | "searchfailure" | "searchclick" | "searchaddtocart" | "searchimpression" | "categoryclick" | "categoryaddtocart" | "categoryimpression" | "cartupdated";
type Callback<T extends BusEvent> = (...args: EventMapping[T]) => void;
/** @hidden */
type tests = [
    Expect<keyof LifecyleEvents | keyof PopupEvents | keyof InternalEvents | keyof TaggingEvents extends BusEvent ? true : false>
];

declare function currencyFormats(): Promise<Record<string, CurrencySettingsDTO>>;

declare function setAutoLoad(flag: boolean): void;
declare function isAutoLoad(): boolean;

declare function setExperiments(experiments: Experiment[]): Promise<void>;

type PopupCampaign = PopupTriggerSettingsDTO & {
    type?: PopupTrigger;
};
declare function createOverlay(): {
    sortedCampaignsWithType: () => PopupCampaign[];
    activate: () => void;
    campaignList: () => PopupCampaign[];
    openPopup: (popupId: string, opts?: {
        preview?: boolean;
        effects?: Record<string, unknown>;
    }) => string | undefined;
    enablePopup: (popupId: string) => void;
    disablePopup: (popupId: string) => void;
    setTriggers: (responseData: EventResponseMessage) => void;
    discountPopup: {
        instance: {
            internal: {
                showPopup(showPopupOptions: {
                    campaignId?: string;
                    popupId?: string;
                    effect: Partial<PopupEffect>;
                    trigger: PopupTrigger;
                    preview?: boolean;
                    cart?: PopupCart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: PopupTrigger) => void;
            okToOpen: (popupId: string, condition: Condition, responseData?: ResponseData) => boolean;
            openCheck: (popupId: string, condition?: Condition, responseData?: ResponseData) => string | null;
            stampOnCheckoutPage: () => void;
            openMinimized: () => void;
            done: (popupId: string) => void;
            writePopupAttribute: typeof writePopupAttribute;
            readPopupAttributes: typeof readPopupAttributes;
        } | null;
        preview(popupId: string, campaignId: string, effect?: PopupEffect): {
            internal: {
                showPopup(showPopupOptions: {
                    campaignId?: string;
                    popupId?: string;
                    effect: Partial<PopupEffect>;
                    trigger: PopupTrigger;
                    preview?: boolean;
                    cart?: PopupCart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: PopupTrigger) => void;
            okToOpen: (popupId: string, condition: Condition, responseData?: ResponseData) => boolean;
            openCheck: (popupId: string, condition?: Condition, responseData?: ResponseData) => string | null;
            stampOnCheckoutPage: () => void;
            openMinimized: () => void;
            done: (popupId: string) => void;
            writePopupAttribute: typeof writePopupAttribute;
            readPopupAttributes: typeof readPopupAttributes;
        };
    };
} | {
    activate(): void;
    campaignList(): (PopupTriggerSettingsDTO & {
        type?: PopupTrigger;
    })[];
    openPopup(): void;
    enablePopup(): void;
    disablePopup(): void;
    setTriggers(): void;
    discountPopup: {
        instance: {};
        preview(): void;
    };
    sortedCampaignsWithType?: undefined;
};

/**
 * @hidden
 */
type Overlay = ReturnType<typeof createOverlay>;

type PerLinkAttributions = Record<string, Record<string, string>>;

type Campaign = {
    result_id: string;
    extra_attribution?: PerLinkAttributions;
};
declare function attributeProductClicksInCampaign(element: HTMLElement, { result_id, extra_attribution }: Campaign): void;

declare function captureError(error: unknown, reporter: string, level?: Level): void;
declare function customer(customer: PushedCustomer): Promise<void>;
type Install = {
    context: Context;
    settings: Settings;
    overlay: Overlay;
};
declare function install(callbackFn: (cb: Install) => void): void;
declare function getSettings(): Settings;
declare function removeCampaigns(divIds: string[]): void;
declare function showPlacementPreviews(placement: {
    element: HTMLElement;
    mode: InsertMode;
}, content: string | HTMLElement): void;
declare function createRecommendationRequest(flags?: {
    includeTagging?: boolean;
    state?: EventRequestMessageV1;
}): RequestBuilder;
declare function setRecommendationsEnabled(flag: boolean): void;
declare function listen<T extends BusEvent>(phase: T, callback: (...args: EventMapping[T]) => void): void;
declare function unlisten<T extends BusEvent>(phase: T, callback: (...args: EventMapping[T]) => void): void;
declare function emit<T extends BusEvent>(phase: T, ...args: EventMapping[T]): void;
declare function load(): Promise<void> | Promise<EventResponseMessage>;
declare function loadRecommendations(element?: string | {
    markNostoElementClicked: string;
}): Promise<EventResponseMessage>;
declare function loadCartPopupRecommendations(products: PushedProduct[], cart: Cart, alwaysShow: boolean): Promise<EventResponseMessage>;
declare function resendCartContent(cart: Cart): Promise<void>;
declare function recordAttribution(event: Event): Attribution;
declare function noop(): void;
/**
 * Main API object that is exposed to the client script. This object contains all the public methods
 * that can be used to interact with the Nosto API.
 *
 * The main way to interact with the API is to use the nostojs function. This function receives a callback
 * function as a parameter and executes it with the API object as a parameter.
 *
 * @group Core
 */
declare const api: {
    /** @hidden */
    internal: {
        logger: {
            log: (...args: unknown[]) => void;
            warn: (...args: unknown[]) => void;
            info: (...args: unknown[]) => void;
            error: (...args: unknown[]) => void;
            debug: (...args: unknown[]) => void;
        };
        /** @deprecated */
        setTaggingProvider: typeof setTaggingProvider;
        getSettings: typeof getSettings;
        modifySettings: typeof modifySettings;
        getOverlay: typeof getOverlay;
        activateOverlay: typeof activateOverlay;
        context: Context;
        getCurrencyFormats: typeof currencyFormats;
        couponGiven: typeof reportCouponGiven;
        getCustomAffinities: () => Promise<CustomerAffinityResponse>;
        getSegments: () => Promise<string[]>;
        emit: typeof emit;
    };
    /**
     * Override the tagging value for the given field
     *
     * @example
     * nostojs(api => {
     *   api.setTaggingProvider("pageType", "category")
     *   api.setTaggingProvider("categories", ["Shoes"])
     * })
     */
    setTaggingProvider: typeof setTaggingProvider;
    placements: Placements;
    visit: Visits;
    /**
     * @deprecated since this was a quick hack for usage in Codepen.IO
     * @hidden
     */
    setResponseMode: typeof noop;
    /**
     * API method create a new session. This should be used when you might want to
     * have multiple sessions on the same page. In most cases, using
     * @see {@link defaultSession} will suffice.
     *
     * @deprecated
     * @hidden
     * @return {Session} the newly created session
     */
    createSession: typeof createSession;
    /**
     * API method to access the default session. This should only be used when implementing
     * Nosto on a single-page application atop a framework such as React, Vue, Angular or
     * the likes.
     * <br/><br/>
     * If you are not using a single-page application but require programmatic access to the
     * Nosto request builder use {@link createRecommendationRequest}.
     *
     * @return {Session} the instance of the default session
     */
    defaultSession: typeof defaultSession;
    /**
     * API method to create a recommendation request. This should only be used when you
     * require programmatic access to the Nosto request builder.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and  you are implementing Nosto, you must use the {@link defaultSession}
     * method.
     *
     * @param {Object} flags a set of flags to customise to request behaviour (eg. {"includeTagging":true}
     * to initialise the request from the page tagging.
     * @return {RequestBuilder} the instance of the request.
     */
    createRecommendationRequest: typeof createRecommendationRequest;
    /**
     * API method to disable the automatic initialization of Nosto. This should be used in
     * cases when you want to manually load content.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you must disable
     * auto-loading.
     *
     * @param {Boolean} flag a true or false value indicating whether to automatically load or not
     *
     * @example
     * nostojs(api => api.setAutoLoad(false))
     * nostojs(api => api.load())
     */
    setAutoLoad: typeof setAutoLoad;
    /**
     * API method to check the status of the autoload flag. This should be used for debugging
     * purposes only.
     *
     * @deprecated since it served little or no purpose and clutters the API erasure
     * @hidden
     * @return {Boolean}
     */
    isAutoLoad: typeof isAutoLoad;
    /**
     * @deprecated
     * @hidden
     * @param {Boolean} flag a true or false value indicating whether to disable placements or not
     */
    setRecommendationsEnabled: typeof setRecommendationsEnabled;
    /**
     * API method to register a listener for JS API events. Nosto's JS API dispatches
     * multiple events across the session lifetime.
     *
     * @param {BusEvent} phase
     * @param {Function} callback the callback function to be invoked
     *
     * @example
     * <caption>to log a message whenever a request is made to Nosto</caption>
     * nostojs(api => api.listen('taggingsent'), () => console.log("The tagging was sent"));
     */
    listen: typeof listen;
    /**
     * API method to unregister a listener for JS API events. Nosto's JS API dispatches
     * multiple events across the session lifetime.
     *
     * @param {BusEvent} phase
     * @param {Function} callback the callback function to be removed
     */
    unlisten: typeof unlisten;
    /**
     * API method to reload all onsite recommendations and content. This should only be used when need to
     * reload all recommendations and content e.g. on a overlay modal.
     * <br/><br/>
     * Incorrect or extraneous usage of this method will lead to skewed page-view
     * statistics, ad every invocation of this method results in a +1 page-view count.
     *
     * @return {Promise}
     */
    loadRecommendations: typeof loadRecommendations;
    /**
     * API method to load Nosto. This function is automatically invoked when the page loads.
     *
     * @return {Promise}
     *
     * @example
     * <caption>to manually load recommendations after DOM ready</caption>
     * nostojs(api => api.load());
     */
    load: typeof load;
    /**
     * API method to access the state of the page tagging. This is useful for debugging
     * what Nosto sees. You are able to see all the page tagging via the debug toolbar.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, if used, this method will always return
     * an empty object (as there shouldn't be any tagging/metadata on the page).
     * <br/><br/>
     * This is only for debugging purposes and should never be used in a production environment
     *
     * @return {Object} the representation of the page tagging
     *
     * @example
     * <caption>to log the page state to the console</caption>
     * nostojs(api => console.log(api.pageTagging()));
     */
    pageTagging: typeof pageTagging;
    /**
     * API method to access the state of the page tagging. This method is asynchronous
     * and will wait for the DOM to be ready before returning the page tagging or in case of tagging provider use
     * it will resolve immediately.
     */
    pageTaggingAsync: typeof pageTaggingAsync;
    /** @hidden */
    loadCartPopupRecommendations: typeof loadCartPopupRecommendations;
    /**
     * Sends an event to Nosto when a recommended product is added to the cart.
     *
     * @param productId
     * @param nostoElementId
     * @return {Promise<Object>}
     */
    reportAddToCart: typeof reportAddToCart;
    /** @hidden */
    captureError: typeof captureError;
    /**
     * @hidden
     * @deprecated
     */
    recommendedProductAddedToCart: typeof reportAddToCart;
    /**
     * API method to force the current session to be a part of the given experiment.
     *
     * @deprecated since no one knows what goes in here.
     * @hidden
     * @param experiments the experiments to move the session into
     * @return {Promise<Object>}
     */
    experiments: typeof setExperiments;
    /**
     * API method to resend the provided customer details to Nosto. This is used in situations
     * when the customer details is loaded after the client script initialization.
     * <br/><br/>
     * If the current customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
     * <br/><br/>
     * It is not recommended to pass the current customer details to the request
     * builder but rather use the customer tagging.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, usage of this method is indicative of an
     * incorrect usage pattern. You should be using the Session API @see {@link Session#setCustomer}
     * to provide the customer information.
     * <br/><br/>
     * This method is legacy method and therefore named incorrectly. Is the customer equivalent
     * of the resendCartContent method and actually should be called resendCustomerDetails.
     *
     * @param {Customer} customer the details of the currently logged in customer
     * @return {Promise<Object>}
     *
     * @example
     * nostojs(api => api.customer({
     *   first_name: "Mridang",
     *   last_name: "Agarwalla",
     *   email: "mridang@nosto.com",
     *   newsletter: false,
     *   customer_reference: "5e3d4a9c-cf58-11ea-87d0-0242ac130003"
     * }))
     */
    customer: typeof customer;
    popupCampaigns: typeof popupCampaigns;
    /** @hidden */
    reloadOverlay: typeof noop;
    /** @hidden */
    openPopup: typeof openPopup;
    /** @hidden */
    enablePopup: typeof enablePopup;
    /** @hidden */
    disablePopup: typeof disablePopup;
    /**
     * API method to resend the cart content to Nosto. This is used in situations
     * when the cart tagging is loaded after the client script initialization.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, usage of this method is indicative of an
     * incorrect usage pattern. You should be using the Session API @see {@link Session#setCart}
     * to provide the cart information.
     *
     * @param {Cart} cart content of the cart
     * @return {Promise<Object>}
     *
     * @example
     * nostojs(api => api.resendCartContent({
     *   items: [
     *     product_id: "101",
     *     sku_id: "101-S",
     *     name: "Shoe",
     *     unit_price: 34.99
     *     price_currency_code: "EUR"
     *   ]
     * }))
     */
    resendCartContent: typeof resendCartContent;
    /**
     * API method to resend the cart tagging to Nosto. This is used in situations
     * when the cart tagging is loaded after the client script initialization. This method
     * reads all metadata having the class "nosto_cart" and sends the extracted cart
     * information to Nosto.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, usage of this method is indicative of an
     * incorrect usage pattern. You should be using the Session API @see {@link Session#setCart}
     * to provide the cart information.
     *
     * @return {Promise<Object>}
     *
     * @example
     * nostojs(api => api.resendCartTagging())
     */
    resendCartTagging: typeof resendCartTagging;
    /**
     * API method to resend the customer tagging to Nosto. This is used in situations
     * when the customer tagging is loaded after the client script initialization. This method
     * reads all metadata having the class "nosto_customer" and sends the extracted customer
     * information to Nosto.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, usage of this method is indicative of an
     * incorrect usage pattern. You should be using the Session API @see {@link Session#setCustomer}
     * to provide the customer information.
     *
     * @return {Promise<Object>}
     *
     * @example
     * nostojs(api => api.resendCustomerTagging())
     */
    resendCustomerTagging: typeof resendCustomerTagging;
    /**
     * API method to resend all the tagging to Nosto. This is used in situations when
     * the cart and the customer tagging is loaded after the client script initialization.
     *
     * While you can use resendCartTagging and the resendCustomerTagging to achieve the
     * same - this method will make a single request to Nosto.
     * <br/><br/>
     * If your site is a single-page application atop a framework such as React, Vue, Angular or
     * the likes, and you are implementing Nosto using the {@link Session} API, you do not
     * ever need this method. Nosto implementations on the single-page applications don't
     * rely on the tagging metadata and therefore, usage of this method is indicative of an
     * incorrect usage pattern.
     *
     * @return {Promise<Object>}
     *
     * @example
     * nostojs(api => api.sendTagging())
     */
    sendTagging: typeof resendAllTagging;
    /**
     * API method to manually add a given segment code to the the current user.  This
     * is used in situations when you want to segment users based on external logic.
     * <br/><br/>
     * Sending a segment code does not automatically create the corresponding segment.
     *
     * @example
     * <caption>to add a user to segment when they've used a discount code</caption>
     * nostojs(api => api.addSegmentCodeToVisit('discount code user'))
     */
    addSegmentCodeToVisit: typeof addSegment;
    /**
     * Manually specify user affinity signals.
     * This is useful for features like user quizzes or surveys where they would specify their preferences.
     * <br/><br/>
     * Explicit affinity signals contribute to the final affinities in a weighted system, and
     * they are weighted lower than buying an item, but higher than adding it to cart.
     *
     * @example
     * <caption>to add affinity to specific brands</caption>
     * nostojs(api => api.addAffinitySignals({ brand: ['nike', 'adidas'] }))
     */
    addAffinitySignals: typeof addAffinitySignals;
    /**
     * Removes injected content from the supplied divIds
     * If campaign was injected statically, then static placement just clears its contents.
     * If dynamically, the injected element gets removed from DOM
     * @param {String[]} divIds
     */
    removeCampaigns: typeof removeCampaigns;
    /**
     * @deprecated since this is for debug-toolbar usage only and should not be in the public API
     * @hidden
     * @param placement
     * @param content
     */
    showPlacementPreviews: typeof showPlacementPreviews;
    /**
     * @deprecated since this is for debug-toolbar usage only and should not be in the public API
     * @hidden
     * @param callbackFn
     */
    install: typeof install;
    /**
     * API method to retrieve search affinities and segments and transform it to partial search query.
     * <br/><br/>
     * Results are cached to sessionStorage and is refreshed after cacheRefreshInterval
     *
     * @returns {Promise<SearchSessionParams>}
     *
     * @example
     * nostojs(api => api.getSearchSessionParams().then((sessionParams) => sessionParams))
     */
    getSearchSessionParams: typeof getSearchSessionParams;
    /**
     * Search function which requests graphql search endpoint.
     *
     * @param {SearchQuery} query Search query.
     * @param {SearchOptions=} options Search custom options.
     * @returns {Promise<SearchResult>}
     *
     * @example
     * nostojs(api => {
     *  api.search({
     *    query: 'green',
     *    products: {
     *     fields: ['name', 'customFields.key', 'customFields.value']
     *    }
     *  })
     *    .then(response => response)
     *    .catch(err => err)
     *  })
     * })
     */
    search: typeof search;
    /**
     * Record search event, should be send on any search
     *
     * @param {SearchTrackOptions} type search type
     * @param {SearchQuery} query Full API query
     * @param {SearchResult} response {object} Full API response
     */
    recordSearch: typeof recordSearch;
    /**
     * Record search click event.
     *
     * @param {SearchTrackOptions} type search type
     * @param {object} hit Full hit object from search API
     */
    recordSearchClick: typeof recordSearchClick;
    /**
     * Record search add to cart event
     *
     * @param {SearchTrackOptions} type search type
     * @param {object} hit Full hit object from search API
     */
    recordSearchAddToCart: typeof recordSearchAddToCart;
    /**
     * Record search submit event (e.g. search form submit). Required to track organic searches.
     *
     * @param {string} query Search query
     */
    recordSearchSubmit: typeof recordSearchSubmit;
    /**
     * Records user interaction events without requesting recommendations.
     * This method allows tracking product views, clicks, or other attribution events
     * while minimizing network requests.
     *
     * @param {Event} event The attribution event to record
     *
     * @example
     * nostojs(api => api.recordAttribution({
     *   type: "vp",
     *   target: "6829460553806",
     *   ref: "frontpage-1"
     * }).done() )
     */
    recordAttribution: typeof recordAttribution;
    /**
     * Automatically sets up attribution tracking for all product clicks within a recommendation campaign.
     * This method is specifically designed for JSON response mode implementations where you're manually
     * rendering recommendations instead of using Nosto's automatic DOM injection.
     *
     * @param {HTMLElement} element The DOM element containing the rendered recommendation products
     * @param {Campaign} recommendation The recommendation campaign object from the JSON response
     * @returns {void}
     *
     * @example
     * // When using JSON response mode to manually render recommendations:
     * nostojs(api => {
     *   const placementId = "frontpage-nosto-1"
     *
     *   const response = await api
     *     .createRecommendationRequest({ includeTagging: true })
     *     .setResponseMode("JSON_ORIGINAL")
     *     .setElements([placementId])
     *     .load()
     *
     *   const recommendation = response.recommendations[placementId]
     *   const container = document.getElementById(placementId)
     *   if (recommendation && container) {
     *     renderProductsToContainer(containerElement, recommendation)
     *     api.attributeProductClicksInCampaign(container, recommendation)
     *   }
     * })
     */
    attributeProductClicksInCampaign: typeof attributeProductClicksInCampaign;
};

/**
 * @group Core
 * @interface
 * */
type API = typeof api;

export type { ABTest, API, AbTestDraftPreviewSettingsDTO, AbTestPreviewSettingsBase, AbTestPreviewSettingsDTO, AbTestVariation, AbTestVariationDTO, AbstractFacebookPixelEvent, AbstractStacklaPixelEvent, Action, ActionResponse, ActiveVisitDTO, Addtocart, AffinityOptions, AnalyticEvent, AnalyticEventProperties, AnalyticsType, AttributedCampaignResult, Attribution, BigcommerceCustomerInfo, BusEvent, Callback, Campaign, CampaignId, CampaignResult, Cart, CartItem, Carttaggingresent, CategoryClick, CategoryEvent, CategoryEventMetadata, CategoryImpression, ClientScriptSettingsDTO, ConditionDTO, ContentDebugDTO, ContentId, Context, ConversionItem, Coupon, Coupongiven, CrawlResponse, CurrencySettingsDTO, CustomerAffinityResponse, CustomerAffinityResponseItem, CustomerDTO, CustomerToken, DebugRequestParamsDTO, DebugToolbarDataDTO, DynamicPlacementDTO, Effect, Endpoint, ErrorResponse, Event, EventAttributionMetadata, EventAttributionParams, EventFields, EventMapping, EventPreviewMessage, EventRefType, EventRequestMessageV1, EventResponseMessage, EventTuple, EventType, Events, Experiment, FacebookData, FilterOperator, FilterRule, ForcedTestDTO, GoogleAnalyticsData, InputSearchABTest, InputSearchABTestVariation, InputSearchBoost, InputSearchFacetConfig, InputSearchFilter, InputSearchHighlight, InputSearchKeywords, InputSearchPin, InputSearchProducts, InputSearchQuery, InputSearchRangeFilter, InputSearchRule, InputSearchRuleMatch, InputSearchSchedule, InputSearchSort, InputSearchTopLevelFilter, InsertMode, JSONProduct, JSONResult, JSONSku, Level, Maybe, Method, NostoSku, NostoVariant, NostojsCallback, OnsiteFeature, Option, OptionValue, Order, OrderCustomer, OrderError, OrderInfo, OverlapCampaignDTO, Overlay, PageType, PerLinkAttributions, PersonalizationBoost, PlacementDebugDTO, PlacementRuleDTO, Placements, PluginMetadata, Popup, PopupCampaignPreviewSettingsDTO, PopupCouponGiven, PopupEmailCollected, PopupEvent, PopupId, PopupTriggerSettingsDTO, PopupTriggered, Popupopened, PostPurchaseOffer, PostPurchaseRecommendation, PostPurchaseRecommendationSku, Postrender, Prerender, Product, ProductIdentifier, ProductPushResponse, PushedCustomer, PushedProduct, PushedProductSKU, PushedVariation, Query, QuerySearchArgs, RecommendationDebugDTO, RecommendationId, RecommendationRequestFlags, RenderMode, RenderResult, RequestBuilder, ResultType, ScheduleEntryId, ScheduleTime, Scripterror, SearchAnalyticsOptions, SearchAutocorrect, SearchClick, SearchEvent, SearchEventMetadata, SearchExclusionBehaviour, SearchExplain, SearchExplainRule, SearchFacet, SearchFacetOrder, SearchFacetTerm, SearchFacetType, SearchFacetValueVisual, SearchFailureEventDTO, SearchHighlight, SearchHit, SearchImpression, SearchKeyword, SearchKeywords, SearchOptions, SearchOutOfStockBehaviour, SearchPageType, SearchParamComparisonFunction, SearchProduct, SearchProductAffinities, SearchProductAiDetected, SearchProductCustomField, SearchProductExtra, SearchProductKeyedVariation, SearchProductSku, SearchProductStats, SearchProducts, SearchQuery, SearchQueryField, SearchResult, SearchRuleScheduleType, SearchRuleScheduleWeekday, SearchSessionParams, SearchSortOrder, SearchStatsFacet, SearchSuccessEventDTO, SearchTermsFacet, SearchTrackOptions, SearchVariationValue, SegmentDebugDTO, SegmentInfoBean, SegmentRuleDebugDTO, Segments, SegmentsResponseBean, Session, Setexperiments, Settings, Sku, StacklaTrackingData, StacklaWidgetDebugDTO, StacklaWidgetEmbedId, StacklaWidgetFilterType, Store, TaggingData, TaggingProviderOptions, TargetType, TestDebugDTO, TestId, TestPlacementRuleDTO, TestPreviewsDTO, UnsavedDraftPreviewSettingsDTO, ValidationError, VariationWithRulesDTO, Violation, VisitDTO, Visits, WebsiteOrder, WidgetPlacement, WidgetPlacementRule, WrapMode, nostojs, tests };
