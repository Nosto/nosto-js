/** @module client */
// @ts-nocheck
import * as axios from 'axios';

declare const eventTypes: readonly ["vp", "lp", "dp", "rp", "bp", "vc", "or", "is", "cp", "ec", "es", "gc", "src", "cpr", "pl", "cc", "con"];
declare const refTypes: readonly ["email", "imgrec", "rec", "api", "oc", "cmp", "os"];
type EventType = typeof eventTypes[number];
type EventRefType = typeof refTypes[number];
type EventTuple = [
    type: EventType,
    target?: string,
    ref?: string,
    refSrc?: string,
    targetFragment?: string,
    refType?: EventRefType
];
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
    abTestAttribution?: {
        [index: string]: string;
    };
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
    cmpMode: string;
    collectEmailFromURL?: boolean;
    cookieTime: number;
    debugRedirectUrl: string;
    defaultCurrencyCode: string;
    defaultVariantId: string;
    disablePlacementAntiFlickering?: boolean;
    discountPopupTriggers: {
        [index: string]: PopupTriggerSettingsDTO[];
    };
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
    placements: {
        [index: string]: DynamicPlacementDTO;
    };
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
    trackingTypes: string[];
    triggerAddToCartPopupWithCookie?: boolean;
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
interface CustomerAffinityResponse {
    discount: number;
    top_brands: CustomerAffinityResponseItem[];
    top_categories: CustomerAffinityResponseItem[];
    top_product_types: CustomerAffinityResponseItem[];
    top_skus: {
        [index: string]: CustomerAffinityResponseItem[];
    };
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
    at?: Date;
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
interface EventRequestMessageV1 {
    cart?: CartItem[];
    cart_hash?: string;
    cart_popup: boolean;
    categories?: string[];
    category_ids?: string[];
    coupon_campaign?: string;
    coupon_code?: string;
    coupon_used?: boolean;
    current_variant_id?: string;
    custom_fields?: {
        [index: string]: string[];
    };
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
    recommendations: {
        [index: string]: unknown;
    };
    se: SegmentsResponseBean;
    sp: StacklaTrackingData;
    visit: string;
    processedRecommendations?: {
        [index: string]: unknown;
    };
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
interface OrderCustomer {
    country: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    newsletter: string;
    order_number: string;
    phone: string;
    post_code: string;
    type: string;
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
interface ProductPushResponse {
    messages: string[];
}
export interface PushedCustomer {
    customer_reference?: string;
    email: string;
    first_name: string;
    hcid?: string;
    last_name: string;
    newsletter?: boolean;
    order_number?: string;
    source?: string;
    source_id?: string;
    type?: string;
}
export interface PushedProduct {
    age_group?: string;
    alternate_image_urls: string[];
    availability: string;
    brand?: string;
    category: string[];
    category_id: string[];
    condition?: string;
    custom_fields: {
        [index: string]: string;
    };
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
    variations: {
        [index: string]: PushedVariation;
    };
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
    productIds: {
        [index: string]: string;
    };
    recoId: string;
    rendered: boolean;
    resultType: string;
    title: string;
    type: string;
    variant: boolean;
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
    custom_fields: {
        [index: string]: string;
    };
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
    external_order_ref: string;
    info?: OrderCustomer;
    items: ConversionItem[];
    order_status?: string;
    order_status_label?: string;
    payment_provider: string;
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
type OnsiteFeature = "RECOMMENDATION" | "CONTENT_DELIVERY" | "POPUP" | "SPLIT_TESTING" | "SCHEDULING" | "STACKLA_WIDGET";
type PageType = "front" | "category" | "product" | "cart" | "search" | "notfound" | "order" | "other" | "checkout";
type RecommendationId = CampaignId<"RecommendationId">;
type RenderMode = "HTML" | "SIMPLE" | "JSON_170x170" | "JSON_100_X_100" | "JSON_90x70" | "JSON_50x50" | "JSON_30x30" | "JSON_100x140" | "JSON_200x200" | "JSON_400x400" | "JSON_750x750" | "JSON_10_MAX_SQUARE" | "JSON_200x200_SQUARE" | "JSON_400x400_SQUARE" | "JSON_750x750_SQUARE" | "JSON_ORIGINAL" | "VERSION_SOURCE";
type StacklaWidgetEmbedId = CampaignId<"StacklaWidgetEmbedId">;
type StacklaWidgetFilterType = "LATEST" | "CATEGORY_OR_BRAND" | "PRODUCT";
type TargetType = "RECOMMENDATION" | "ONSITE_CONTENT" | "AB_TEST" | "HIDE_CONTENT" | "STACKLA_WIDGET";
type TestId = CampaignId<"TestId">;
type WrapMode = "SIMPLE" | "PRESERVE_CLASS" | "CLONED" | "UNWRAPPED";
type CampaignId<T extends string = string> = string & {
    __kind: T;
};

type Maybe<T> = NonNullable<T> | undefined;
type Widen<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : T;
declare function maybe<T>(value?: T): NonNullable<T> | undefined;
declare const pageTypeAliases: {
    front: string[];
    category: string[];
    product: string[];
    cart: string[];
    search: string[];
    order: string[];
    other: string[];
};
declare function isPageType(val: string): val is PageType;
type Extends<A extends B, B> = true;
type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
type Expect<T extends true> = T;

interface Store {
    getCustomerId(): Maybe<string>;
    setCustomerId(id: string): void;
}

declare function initialBody(): HTMLElement | null;

type PerLinkAttributions = Record<string, Record<string, string>>;

type StateMode = InsertMode | "HTML";
declare function removeInjectedCampaign(divId: string): void;
declare function resetElements(): void;
declare function injectedCampaigns(): {
    [x: string]: Readonly<{
        mode: StateMode;
        original?: readonly HTMLElement[];
        replacement?: readonly HTMLElement[];
        wrapper?: WrapMode;
    }>;
};

interface Campaign$1 {
    html: string;
    result_id: string;
    extra_attribution?: PerLinkAttributions;
}

type CurrencySettings = {
    currencyBeforeAmount: boolean;
    currencyToken?: string;
    decimalCharacter?: string;
    groupingSeparator?: string;
    decimalPlaces: number;
};
type CurrencyFormats = {
    [code: string]: CurrencySettings;
};
declare function currencyFormats(): Promise<CurrencyFormats>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */

interface Attribution {
    recordAttribution: (event: Event) => Attribution;
    dumpData: () => EventTuple[];
    done: () => Promise<void>;
}

type SearchTrackOptions = "serp" | "autocomplete" | "category";
type SearchAnalyticsOptions = {
    isKeyword?: boolean;
};

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
 *
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
 *
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
 *
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
 *
 */
interface InputSearchHighlight {
    postTag: string;
    preTag: string;
}
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
 *
 */
interface InputSearchPin {
    /** Which product field will be used to match value on. If not provided, `productId` is used */
    field?: string;
    /** Where the pinned product will appear on the search page. Starts from 1 */
    position: number;
    /** If product field matches any of the provided values, pin will be applied. Currently, only exact match of values is supported */
    value: string[];
}
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
    /** Selects product variation or currency */
    variationId?: string;
}
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
    /** `(Private key only)` Overwrites current time. Used to trigger scheduled rules ahead of schedule */
    time?: number;
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
 *
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
/** Rules allow search query modification based on search parameters */
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
 *
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
/** Defines when the rule will be applied based on date/time */
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
 *
 */
interface InputSearchSort {
    field: string;
    order: SearchSortOrder;
}
/** Same as `InputSearchFilter` type, but accepts an additional optional parameter `excludeFacets` */
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
interface SearchAutocorrect {
    /** Original query value before autocorrect */
    original: string;
}
/** Determines how excluded products are handled */
type SearchExclusionBehaviour = 
/** Moves excluded products to the end of search results */
"deboost"
/** Hides excluded products */
 | "hide"
/** Does not handle excluded products in any special way */
 | "none";
/** Gives additional info on why search results are the way they are. */
interface SearchExplain {
    /** Matched rules are returned */
    matchedRules: SearchExplainRule[];
}
interface SearchExplainRule {
    id: string;
    /** Name of the rule that matched */
    name?: string;
    /** JSON object scalar, parse on frontend. Which params were set after triggering query rule */
    set?: unknown;
}
type SearchFacet = SearchStatsFacet | SearchTermsFacet;
/** Returned facet order. Only applies if facet type is `terms` */
type SearchFacetOrder = 
/** Order by term count */
"count"
/** Order by term name */
 | "index";
interface SearchFacetTerm {
    /** How many products had this term */
    count: number;
    /** Was this term selected, to add selected checkbox in frontend */
    selected: boolean;
    /** Term value */
    value: string;
}
/** Type of facet */
type SearchFacetType = 
/** Returns min and max values for a numeric field */
"stats"
/** Returns all unique terms in a field */
 | "terms";
interface SearchHighlight {
    keyword?: string;
}
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
/** Determines how out of stock products are handled */
type SearchOutOfStockBehaviour = 
/** Moves out of stock products to the end of search results */
"deboost"
/** Hides out of stock products */
 | "hide"
/** Does not handle out of stock products in any special way */
 | "none";
/** Defines how input values and expected values are compared */
type SearchParamComparisonFunction = 
/** Applies partial match on param value from expected values list */
"contains"
/** Applies stemming algorithm to param values and expected values and does an exact match of outputs */
 | "stemmed"
/** Applies stemming algorithm and does partial match on param value from expected values list */
 | "stemmedContains";
interface SearchProduct {
    _explain?: unknown;
    _pinned?: boolean;
    _score?: number;
    affinities?: SearchProductAffinities;
    ageGroup?: string;
    ai?: SearchProductAiDetected;
    alternateImageUrls?: string[];
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
    unitPricingBaseMeasure?: number;
    unitPricingMeasure?: number;
    unitPricingUnit?: string;
    /** Product page url */
    url?: string;
    variantId?: string;
    variations?: SearchProductKeyedVariation[];
}
interface SearchProductAiDetected {
    dominantColors?: string[];
    overridingColor?: string;
    primaryColor?: string;
}
interface SearchProductAffinities {
    brand?: string;
    categories?: string[];
    color?: string[];
    size?: string[];
}
interface SearchProductCustomField {
    key: string;
    value: string;
}
interface SearchProductExtra {
    key: string;
    value: string[];
}
interface SearchProductKeyedVariation {
    key: string;
    value: SearchVariationValue;
}
interface SearchProductSku {
    ai?: SearchProductAiDetected;
    availability?: string;
    customFields?: SearchProductCustomField[];
    id?: string;
    imageUrl?: string;
    inventoryLevel?: number;
    listPrice?: number;
    name?: string;
    price?: number;
    priceText?: string;
    url?: string;
}
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
/** Searchable fields of priority */
type SearchQueryField = 
/** Searchable fields with `High` priority */
"high"
/** Searchable fields with `Low` priority */
 | "low"
/** Searchable fields with `Medium` priority */
 | "medium";
/** AB tests variations */
interface ABTest {
    id: string;
    activeVariation: {
        id: string;
    };
}
/** Search response */
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
type SearchRuleScheduleType = "ONE_TIME" | "WEEKLY";
type SearchRuleScheduleWeekday = "FRIDAY" | "MONDAY" | "SATURDAY" | "SUNDAY" | "THURSDAY" | "TUESDAY" | "WEDNESDAY";
/** Order of the sort */
type SearchSortOrder = "asc" | "desc";
interface SearchStatsFacet {
    /** Numeric field for which min/max values were calculated */
    field: string;
    id: string;
    /** Maximum value of faceted field */
    max: number;
    /** Minimum value of faceted field */
    min: number;
    name: string;
    type: SearchFacetType;
}
interface SearchTermsFacet {
    /** Facet term list */
    data: SearchFacetTerm[];
    /** Field from which terms were calculated */
    field: string;
    id: string;
    name: string;
    type: SearchFacetType;
}
interface SearchVariationValue {
    availability?: string;
    listPrice?: number;
    price?: number;
    priceCurrencyCode?: string;
}
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

type SearchOptions = {
    redirect: boolean;
    track: SearchTrackOptions;
} & SearchAnalyticsOptions;
/**
 * Search function
 */
declare function search(query: SearchQuery, options?: SearchOptions): Promise<SearchResult>;

type PersonalizationBoost = {
    field: string;
    value: string[];
    weight: number;
};
type SearchSessionParams = {
    segments?: string[];
    products?: {
        personalizationBoost: PersonalizationBoost[];
    };
};
declare function getSearchSessionParams(): Promise<SearchSessionParams>;

/**
 * Record search event, should be send on any search
 */
declare function recordSearch(type: SearchTrackOptions, query: SearchQuery, response: SearchResult, options?: SearchAnalyticsOptions): void;
declare function reportSearchImpression(productIds: string[] | undefined, metadata: SearchEventMetadata, page: number | undefined, properties: Maybe<AnalyticEventProperties>): Promise<void>;
/**
 * Record search submit event (e.g. search form submit). Required to track organic searches.
 */
declare function recordSearchSubmit(query: string): void;

/**
 * Record search click event
 */
declare function recordSearchClick(type: SearchTrackOptions, hit: SearchProduct): void;
declare function storeSearchClick(productId: string | undefined, metadata: SearchEventMetadata, productUrl: string, properties: Maybe<AnalyticEventProperties>): void;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function addSegment(segment: string): Promise<void>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
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

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function setCustomer(customer: PushedCustomer): Promise<void>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function setExperiments(experiments: Experiment[]): Promise<void>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function recommendedProductAddedToCart(productId: string, recoId: string): Promise<void>;

type ParseUriResult = Pick<URL, "href" | "protocol" | "hostname" | "hash" | "search" | "searchParams">;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */

interface Location {
    source?: unknown;
    value?: {
        referrer: string;
        current: string;
    };
    referrer?: string;
    current?: ParseUriResult;
}
interface Coupon {
    campaign?: string;
    code?: string;
    used?: boolean;
}
interface Range {
    from?: number;
    to?: number;
}
interface ExtraParams {
    at?: Date;
    ep?: boolean;
    fs?: string[];
    tp?: TestPreviewsDTO;
}
interface Debug {
    debugToken?: string;
    skipCache?: boolean;
    extraParams?: ExtraParams | null;
    recoTrace?: string;
    previewMode?: boolean;
}
interface Reference {
    mail?: {
        id: string;
        target: string;
    };
    campaign?: {
        id: string;
        target?: string;
    };
}
interface Segment {
    forced?: string | string[];
    manual?: string[];
}
interface Order {
    items: CartItem[];
    info: OrderInfo;
    hcid: string;
}
interface Cart$3 {
    items?: CartItem[];
    hcid?: string;
}
type Product$1 = {
    product_id: string;
    selected_sku_id?: string;
};
interface State {
    segments: Segment;
    url?: string;
    cartPopup: boolean;
    events: Event[];
    categories?: string[];
    products: Product$1[];
    customer?: PushedCustomer;
    coupon: Coupon;
    categoryIds?: string[];
    parentCategoryIds?: string[];
    tags?: string[];
    customFields?: Record<string, string[]>;
    order?: Order;
    responseMode: RenderMode;
    debug: Debug;
    cart?: Cart$3;
    restoreLink?: string;
    pageType?: PageType;
    sortOrder?: string;
    price: Range;
    variation?: string;
    elements?: string[];
    location: Location;
    externalIdentifier?: string;
    klaviyoCookie?: string;
    reference: Reference;
    experiments?: Experiment[];
}

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
type Level = "log" | "warn" | "error" | "debug" | "info";

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
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

interface PluginMetadata {
    mainModule?: string;
    cmpModule?: string;
    msiModule?: string;
}
interface Cart$2 {
    hcid?: string;
    items: CartItem[];
}
export type Product = {
    product_id: string;
    selected_sku_id?: string;
};
export interface Data<ProductType extends Product = Product> {
    cart: Cart$2 | undefined;
    customer: PushedCustomer | undefined;
    variation: string | undefined;
    restoreLink: string | undefined;
    products: ProductType[];
    order: WebsiteOrder | undefined;
    searchTerms: string[] | undefined;
    categories: string[] | undefined;
    categoryIds: string[] | undefined;
    parentCategoryIds: string[] | undefined;
    tags: string[] | undefined;
    customFields: Record<string, string[]> | undefined;
    elements: string[] | undefined;
    pageType: PageType | undefined;
    sortOrder: string | undefined;
    pluginVersion: PluginMetadata | undefined;
}

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
interface Cart$1 {
    hcid?: string;
    items: CartItem[];
}
declare function findCart(): Cart$1 | undefined;

declare function findProducts(): PushedProduct[];

declare function findCustomer(): PushedCustomer | undefined;

declare function findOrder(): WebsiteOrder | undefined;

declare function findPluginVersions(): PluginMetadata | undefined;

declare function findCurrentVariation(): Maybe<string>;
declare function findSearchTerms(): Maybe<string[]>;
declare function findCurrentCategories(): Maybe<string[]>;
declare function findCurrentCategoryIds(): Maybe<string[]>;
declare function findCurrentParentCategoryIds(): Maybe<string[]>;
declare function findCurrentTags(): Maybe<string[]>;
declare function findCurrentCustomFields(): Maybe<Record<string, string[]>>;
declare function findRestoreLink(): Maybe<string>;
declare function findPageType(): Maybe<PageType>;
declare function findSortOrder(): Maybe<string>;
declare function findElements(ignoredPlacements: string[]): Maybe<string[]>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
/**
 * Resends all the tagging to Nosto. Only the page tagging is sent over
 * and nothing else - no placements, no events, nothing.
 * This method was originally used by the Magento 2 plugin. In the Magento 2 plugin
 * the order tagging was loaded asynchronously so a method like this was needed.
 *
 * @return {Promise}
 */
declare function resendAllTagging(): Promise<void>;
type Tagging = Data<PushedProduct>;
declare function pageTagging(): Tagging;
declare const taggingProviders: {
    products: typeof findProducts;
    cart: typeof findCart;
    customer: typeof findCustomer;
    order: typeof findOrder;
    searchTerms: typeof findSearchTerms;
    categories: typeof findCurrentCategories;
    categoryIds: typeof findCurrentCategoryIds;
    parentCategoryIds: typeof findCurrentParentCategoryIds;
    tags: typeof findCurrentTags;
    customFields: typeof findCurrentCustomFields;
    variation: typeof findCurrentVariation;
    pluginVersion: typeof findPluginVersions;
    elements: typeof findElements;
    restoreLink: typeof findRestoreLink;
    pageType: typeof findPageType;
    sortOrder: typeof findSortOrder;
};
declare function setTaggingProvider<T extends keyof Tagging>(name: T, provider: typeof taggingProviders[T]): void;

interface Prerender {
    customerId?: string;
    affinityScores: CustomerAffinityResponse;
    geoLocation: string[];
    eventDate: Date;
    pageViews: number;
    segments: SegmentsResponseBean;
}
interface Postrender {
    responseData: Record<string, unknown>;
    filledElements: string[];
    unFilledElements: string[];
}
interface Setexperiments {
    experiments: Experiment[];
}
interface Coupongiven {
    coupon_code: string;
    coupon_campaign: string;
    coupon_used: boolean;
}
interface Scripterror {
    msg: string;
    stack?: string;
    level: Level;
}
interface Addtocart {
    productId: string;
    placementId: string;
}
interface Carttaggingresent {
    cart_items: CartItem[];
    restore_link?: string;
}
interface Segments {
    segment: string;
}
interface Popupopened {
    campaignId: string;
    error?: unknown;
    type: "api" | string;
}
interface Popup {
    campaignId: string;
}
type LifecyleEvents = {
    prerequest: [EventRequestMessageV1];
    prerender: [Prerender];
    postrender: [Postrender];
    taggingsent: [EventResponseMessage];
    taggingresent: [Tagging];
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
};
type EventMapping = LifecyleEvents & PopupEvents & InternalEvents;

declare function setAutoLoad(flag: boolean): void;
declare function isAutoLoad(): boolean;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */

interface RecommendationRequestFlags {
    skipPageViews?: boolean;
    trackEvents?: boolean;
    skipEvents?: boolean;
    reloadCart?: boolean;
}
type RequestBuilder = {
    setForcedSegments(segments: string[]): RequestBuilder;
    setSegmentCodes(segments: string[]): RequestBuilder;
    setPageType(pageType: PageType | undefined): RequestBuilder;
    setSortOrder(sortOrder: string): RequestBuilder;
    addEvent(event: Event): RequestBuilder;
    setCustomer(customer: PushedCustomer): RequestBuilder;
    setCoupon(coupon: Coupon): RequestBuilder;
    addElements(elements: string[]): RequestBuilder;
    setElements(elements: string[] | undefined): RequestBuilder;
    setCartContent(cart: Cart$3 | undefined): RequestBuilder;
    setRestoreLink(restoreLink: string | undefined): RequestBuilder;
    addCartItems(): RequestBuilder;
    addCartCookieHash(hash: string): RequestBuilder;
    addCartTotal(): RequestBuilder;
    addCartSize(): RequestBuilder;
    setProducts(products: Product$1[], ref?: string): RequestBuilder;
    addCurrentCategories(categories: string[]): RequestBuilder;
    setCurrentCategories(categories: string[]): RequestBuilder;
    addCurrentCategoryIds(categoryIds: string[]): RequestBuilder;
    addCurrentParentCategoryIds(parentCategoryIds: string[]): RequestBuilder;
    addCurrentTags(tags: string[]): RequestBuilder;
    setCurrentTags(tags: string[]): RequestBuilder;
    addCurrentCustomFields(fields: Record<string, string[]>): RequestBuilder;
    setCurrentPriceFrom(value: number): RequestBuilder;
    setCurrentPriceTo(value: number): RequestBuilder;
    addCurrentVariation(variation: string): RequestBuilder;
    addCustomer(customer: PushedCustomer): RequestBuilder;
    setResponseMode(mode: RenderMode): RequestBuilder;
    setExperiments(experiments: Experiment[]): RequestBuilder;
    disableCampaignInjection(): RequestBuilder;
    enablePreview(): RequestBuilder;
    addOrderData(order: Order): RequestBuilder;
    setMailRef(refMail: string, recRef: string): RequestBuilder;
    populateFrom(params: {
        data: Data;
        forcedSegments: string[];
    }, unwrappedReference?: string): RequestBuilder;
    setRecommendationRef(recRef: string, recRefSrc?: string): RequestBuilder;
    send(flags: RecommendationRequestFlags): Promise<EventResponseMessage>;
    load(flags?: RecommendationRequestFlags): Promise<EventResponseMessage>;
    loadCartPopupRecommendations(alwaysShow: boolean): Promise<EventResponseMessage>;
    loadRecommendations(flags?: RecommendationRequestFlags): Promise<EventResponseMessage>;
    getEvents(): Event[];
    getData(): State;
};

export interface Session {
    /**
     * Sets the information about the user's current shopping cart. It the user
     * does not have any items in his shopping cart, you can pass <code>null<code>.
     * Passing <code>null<code> will nullify the user's shopping cart on Nosto's
     * end. You must also pass in the shopping cart content in it's entirety as
     * partial content are not supported.
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
     *
     * @public
     * @param {Cart|undefined} cart the details of the user's shopping cart contents
     * @returns {Session} the current session
     */
    setCart(cart: Cart$2 | undefined): Session;
    /**
     * Sets the information about the currently logged in customer. If the current
     * customer is not provided, you will not be able to leverage features such as
     * triggered emails. While it is recommended to always provide the details of
     * the currently logged in customer, it may be omitted if there are concerns
     * about privacy or compliance.
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
     *
     * @public
     * @param {Customer} customer the details of the currently logged in customer
     * @returns {Session} the current session
     */
    setCustomer(customer: PushedCustomer | undefined): Session;
    /**
     * Sets the current variation identifier for the session. A variation identifier
     * identifies the current currency (or the current customer group). If your site
     * uses multi-currency, you must provide the ISO code current currency being viewed.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setVariation("GBP")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param {String} variation the case-sensitive identifier of the current variation
     * @returns {Session} the current session
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setRestoreLink("https://jeans.com/session/restore?sid=6bdb69d5-ed15-4d92")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param {String} restoreLink the secure URL to restore the user's current session
     * @returns {Session} the current session
     */
    setRestoreLink(restoreLink: string): Session;
    /**
     * Sets the response type to HTML or JSON_ORIGINAL. This denotes the preferred
     * response type of the recommendation result.
     * If you would like to access the raw recommendation data in <code>JSON</code> form, specify
     * <code>JSON</code>. When you specify JSON, you will need to template the result yourself.
     * If you require a more simplified approach, specify <code>HTML</code>. When you specify
     * <code>HTML</code>, you get back HTML blobs, that you may simply inject into
     * you placements.
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .setResponseMode("HTML")
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param {String} mode the response mode for the recommendation data
     * @returns {Session} the current session
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewFrontPage()
     *   .setPlacements(["best-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     *
     * @public
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCart()
     *   .setPlacements(["free-shipper"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewNotFound()
     *   .setPlacements(["best-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewProduct("101")
     *   .setCategories(["/men/trousers"])
     *   .setRef("123", "example_reco_id")
     *   .setPlacements(["cross-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param product
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewProductSku("101", "101-sku-1")
     *   .setCategories(["/men/trousers"])
     *   .setRef("123", "example_reco_id")
     *   .setPlacements(["cross-seller"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param productId
     * @param skuId
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCategory("/men/shoes")
     *   .setPlacements(["category123"])
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param {Array<String>} categories
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewTag("colourful")
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @deprecated as this is an advanced action with a limited a use case
     * @param {Array<String>} tags the set of the tags being viewed.
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewCustomField({material: "cotton"})
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @deprecated as this is an advanced action with a limited a use case
     * @param {Object} customFields custom fields being viewed.
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewSearch("black shoes")
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param {Array.<String>} searchTerms the non-encoded search terms
     * @returns {Action} the action instance to load content or track events.
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
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .viewOther()
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @returns {Action} the action instance to load content or track events.
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
     * @public
     * @param {Order} order the information about the order that was placed
     * @returns {Action} the action instance to load content or track events.
     */
    addOrder(order: WebsiteOrder): Action;
    /**
     * Creates an action to report that product was added to the shopping cart,
     * e.g. from the recommendation slot with "Add to cart" button.
     * <p>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     *
     * @example
     * nostojs(api => api
     *   .defaultSession()
     *   .reportAddToCart("123", "reco-slot-1")
     *   .load()
     *   .then(data => console.log(data)))
     *
     * @public
     * @param product
     * @param element
     * @returns {Action} the action instance to load content or track events.
     */
    reportAddToCart(product: string, element: string): Action;
    /**
     * @example
     * nostojs(api => api
     *  .defaultSession()
     *  .recordAttribution("vp", "12345678", "123456")
     *  .done()
     *  .then(data => console.log(data))
     *  @param { EventType } type
     * @param { String } target
     * @param { String | undefined } [ref]
     * @param { String | undefined } [refSrc]
     *  @return { Object }
     *
     */
    recordAttribution(type: EventType, target: string, ref: string, refSrc: string): Attribution;
}
export interface Action {
    /**
     * Handles click attribution for product recommendations.
     * This can be called when reporting a product view
     * to signal that the view is a result of a click on a recommendation.
     *
     * @public
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
     * @public
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
     * does not have any items in his shopping cart, you can pass <code>null<code>.
     * Passing <code>null<code> will nullify the user's shopping cart on Nosto's
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
    setCart(cart: Cart$2 | undefined): Action;
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
     * @public
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
     * @public
     * @param searchTerms
     * @return {Action}
     */
    setSearchTerms(searchTerms: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
     * @param {Array<String>} categories
     * @return {Action}
     */
    setCategories(categories: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
     * @param {Array<String>} categoryIds
     * @return {Action}
     */
    setCategoryIds(categoryIds: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
     * @param {Array<String>} parentCategoryIds
     * @return {Action}
     */
    setParentCategoryIds(parentCategoryIds: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
     * @param tags
     * @return {Action}
     */
    setTags(tags: string[]): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
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
     * @public
     * @param {String} variation the case-sensitive identifier of the current variation
     * @return {Action}
     */
    setVariation(variation: string | undefined): Action;
    /**
     * <br/><br/>
     * You must invoke [the load method]{@link Action#load} on the resultant
     * action in order for the request to be made.
     *
     * @public
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
     * @public
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
     * @public
     */
    setPageType(pageType: PageType): Action;
    /**
     * @public
     * @return {Object}
     */
    dumpData(): Data;
    update(): unknown;
    load(flags?: RecommendationRequestFlags): Promise<ActionResponse>;
}
export interface ActionResponse {
    recommendations: Record<string, unknown>;
    campaigns?: {
        recommendations: Record<string, unknown>;
        content: Record<string, unknown>;
    };
    page_views: number;
    geo_location: string[];
    affinities: CustomerAffinityResponse;
    cmpid: string;
}

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function createSession(): Session;

type Settings = ClientScriptSettingsDTO & {
    testing: boolean;
    live: boolean;
};
declare function modifySettings(updates: Partial<Settings>): void;

declare function load$1(): Promise<void>;

declare function load(): Promise<void>;

/** *****************************************************************************
 * Copyright (c) 2024 Nosto Solutions Ltd All Rights Reserved.
 * <p>
 * This software is the confidential and proprietary information of
 * Nosto Solutions Ltd ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the agreement you entered into with
 * Nosto Solutions Ltd.
 ***************************************************************************** */
declare function reportCouponGiven(campaignId: string, couponCode: string, couponUsed: boolean): Promise<void>;

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
interface Cart {
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
    type: string | undefined;
}[] | undefined;
declare function getOverlay(): {
    sortedCampaignsWithType: () => (PopupTriggerSettingsDTO & {
        type?: string;
    })[];
    activate: () => void;
    campaignList: () => (PopupTriggerSettingsDTO & {
        type?: string;
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
                    trigger: string;
                    preview?: boolean;
                    cart?: Cart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: string) => void;
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
                    trigger: string;
                    preview?: boolean;
                    cart?: Cart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: string) => void;
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
        type?: string;
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

declare function clear(): void;
declare function isDebug(): boolean;
declare function isPreview(): boolean;
declare function setPreview(optArg: boolean): void;
declare function setRecotrace(optArg: boolean): void;
declare function setSkipCache(optArg: boolean): void;
declare function setDev(optArg: boolean): void;
declare function setDebugState(optArg: ExtraParams | undefined): void;
declare function isRecotraceEnabled(): boolean;
declare function skipCache(): boolean;
declare function getDebugState(): Maybe<ExtraParams>;
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

type NostojsCallback = (api: API) => unknown;
type InitOptions = {
    responseMode?: RenderMode;
    disableAutoLoad?: boolean;
    disableRecommendations?: boolean;
};
type nostojs = {
    (cb: NostojsCallback): void;
    q?: NostojsCallback[];
    o?: InitOptions;
};

declare function windowTools(win: Window, scriptLoaderWindow: Window): {
    window: Window;
    loadScript: (url: string, callbackFn?: () => void, options?: {
        module?: boolean;
    }) => Promise<void>;
    loadOnce: (url: string, callbackFn: () => void) => void;
    xdr: (url: string, data: EventRequestMessageV1) => axios.AxiosPromise<unknown>;
    domReady: (fn: () => void) => void;
};
type WindowTools = ReturnType<typeof windowTools>;
interface Context {
    namespace: string;
    created: Date;
    domHasLoaded: boolean;
    loader: nostojs;
    initOptions?: InitOptions;
    updateSiteUrl: () => void;
    siteUrl: ParseUriResult;
    siteUrlCleaned: string;
    requests: {
        sent: unknown[];
        received: unknown[];
    };
    referer?: ParseUriResult;
    site: WindowTools;
    nosto: WindowTools;
    debugToken: string;
    mode: Mode;
    popupShown: boolean;
}

type Campaign = PopupTriggerSettingsDTO & {
    type?: string;
};
declare function createOverlay(): {
    sortedCampaignsWithType: () => Campaign[];
    activate: () => void;
    campaignList: () => Campaign[];
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
                    trigger: string;
                    preview?: boolean;
                    cart?: Cart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: string) => void;
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
                    trigger: string;
                    preview?: boolean;
                    cart?: Cart;
                }): void;
                close(): void;
            };
            preview: (popupId: string, campaignId: string, effect?: PopupEffect) => void;
            previewById: (popupId: string, effect: PopupEffect) => void;
            open: (popupId: string, response: ResponseData | null, effect: PopupEffect, trigger: string) => void;
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
        type?: string;
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

type Overlay = ReturnType<typeof createOverlay>;

declare function noop(): void;
type Install = {
    context: Context;
    settings: Settings;
    overlay: Overlay;
};
declare const api: {
    internal: {
        context: Context;
        logger: {
            log: (...args: unknown[]) => void;
            warn: (...args: unknown[]) => void;
            info: (...args: unknown[]) => void;
            error: (...args: unknown[]) => void;
            debug: (...args: unknown[]) => void;
        };
        activateOverlay: typeof activateOverlay;
        popupCampaigns: typeof popupCampaigns;
        reloadOverlay: () => void;
        getOverlay: typeof getOverlay;
        openPopup: typeof openPopup;
        enablePopup: typeof enablePopup;
        disablePopup: typeof disablePopup;
        extractTagging: typeof pageTagging;
        couponGiven: typeof reportCouponGiven;
        loadToolbar: typeof load;
        loadUnsubscribePanel: typeof load$1;
        modifySettings: typeof modifySettings;
        getSettings: () => Settings;
        addPageTaggingToRequest: (request: RequestBuilder, sendElements: boolean, unwrappedReference?: string) => void;
        removeCampaigns: (divIds: string[]) => void;
        showPlacementPreviews: (placement: {
            element: HTMLElement;
            mode: InsertMode;
        }, content: string) => void;
        injectedCampaigns: typeof injectedCampaigns;
        createSession: typeof createSession;
        defaultSession: () => Session;
        createRecommendationRequest: (flags?: {
            includeTagging?: boolean;
        }) => RequestBuilder;
        setAutoLoad: typeof setAutoLoad;
        isAutoLoad: typeof isAutoLoad;
        setRecommendationsEnabled: (flag: boolean) => void;
        listen: <T extends keyof EventMapping>(phase: T, callback: (...args: EventMapping[T]) => void) => void;
        load: () => Promise<void> | Promise<EventResponseMessage>;
        loadRecommendations: (element?: string | {
            markNostoElementClicked: string;
        }) => Promise<EventResponseMessage>;
        loadCartPopupRecommendations: (products: PushedProduct[], cart: Cart$3, alwaysShow: boolean) => Promise<EventResponseMessage>;
        recommendedProductAddedToCart: typeof recommendedProductAddedToCart;
        setExperiments: typeof setExperiments;
        setCustomer: typeof setCustomer;
        resendCartContent: (cart: Cart$3) => Promise<void>;
        resendCartTagging: typeof resendCartTagging;
        resendCustomerTagging: typeof resendCustomerTagging;
        sendTagging: typeof resendAllTagging;
        setTaggingProvider: typeof setTaggingProvider;
        addSegment: typeof addSegment;
        getSegments: () => Promise<SegmentsResponseBean>;
        getCustomAffinities: () => Promise<CustomerAffinityResponse>;
        reportSearchClick: typeof storeSearchClick;
        reportSearchImpression: typeof reportSearchImpression;
        getSearchSessionParams: typeof getSearchSessionParams;
        search: typeof search;
        recordSearch: typeof recordSearch;
        recordSearchClick: typeof recordSearchClick;
        recordSearchSubmit: typeof recordSearchSubmit;
        recordAttribution: (event: Event) => Attribution;
        getCurrencyFormats: typeof currencyFormats;
    };
    placements: {
        getPlacements: () => string[];
        injectCampaigns: (campaigns: Record<string, string & Campaign$1>) => {
            filledElements: string[];
            unFilledElements: string[];
        };
        reset: typeof resetElements;
        isFiltered: (placement: DynamicPlacementDTO) => boolean;
        isFilteringConfigured: (placement: DynamicPlacementDTO) => boolean;
        removeContent: typeof removeInjectedCampaign;
        initialBody: typeof initialBody;
    };
    visit: {
        getStore: () => Store;
        setStore: (s: Store) => Store;
        isDoNotTrack: () => boolean;
        setDoNotTrack: (dnt: boolean) => boolean;
        getCustomerId: () => Maybe<string>;
        setCustomerId: (id: string) => void;
        setCustomerIdentifierService: (s: Store) => Store;
    };
    setResponseMode: typeof noop;
    createSession: typeof createSession;
    defaultSession: () => Session;
    createRecommendationRequest: (flags?: {
        includeTagging?: boolean;
    }) => RequestBuilder;
    setAutoLoad: typeof setAutoLoad;
    isAutoLoad: typeof isAutoLoad;
    setRecommendationsEnabled: (flag: boolean) => void;
    listen: <T extends keyof EventMapping>(phase: T, callback: (...args: EventMapping[T]) => void) => void;
    loadRecommendations: (element?: string | {
        markNostoElementClicked: string;
    }) => Promise<EventResponseMessage>;
    load: () => Promise<void> | Promise<EventResponseMessage>;
    pageTagging: typeof pageTagging;
    loadCartPopupRecommendations: (products: PushedProduct[], cart: Cart$3, alwaysShow: boolean) => Promise<EventResponseMessage>;
    reportAddToCart: typeof recommendedProductAddedToCart;
    captureError: (error: unknown, reporter: string, level?: Level) => void;
    recommendedProductAddedToCart: typeof recommendedProductAddedToCart;
    experiments: typeof setExperiments;
    customer: (customer: PushedCustomer) => Promise<void>;
    popupCampaigns: typeof popupCampaigns;
    reloadOverlay: () => void;
    openPopup: typeof openPopup;
    enablePopup: typeof enablePopup;
    disablePopup: typeof disablePopup;
    resendCartContent: (cart: Cart$3) => Promise<void>;
    resendCartTagging: typeof resendCartTagging;
    resendCustomerTagging: typeof resendCustomerTagging;
    sendTagging: typeof resendAllTagging;
    addSegmentCodeToVisit: typeof addSegment;
    removeCampaigns: (divIds: string[]) => void;
    showPlacementPreviews: (placement: {
        element: HTMLElement;
        mode: InsertMode;
    }, content: string) => void;
    install: (callbackFn: (cb: Install) => void) => void;
    getSearchSessionParams: typeof getSearchSessionParams;
    search: typeof search;
    recordSearch: typeof recordSearch;
    recordSearchClick: typeof recordSearchClick;
    recordSearchSubmit: typeof recordSearchSubmit;
    recordAttribution: (event: Event) => Attribution;
};

type API = typeof api;

export { type API, type AbTestDraftPreviewSettingsDTO, type AbTestPreviewSettingsBase, type AbTestPreviewSettingsDTO, type AbTestVariation, type AbTestVariationDTO, type AbstractFacebookPixelEvent, type AbstractStacklaPixelEvent, type ActiveVisitDTO, type Addtocart, type AnalyticEvent, type AnalyticEventProperties, type BigcommerceCustomerInfo, type CampaignId, type CartItem, type Carttaggingresent, type CategoryClick, type CategoryEvent, type CategoryEventMetadata, type CategoryImpression, type ClientScriptSettingsDTO, type ConditionDTO, type ContentDebugDTO, type ContentId, type Context, type ConversionItem, type Coupongiven, type CrawlResponse, type CustomerAffinityResponse, type CustomerAffinityResponseItem, type CustomerDTO, type CustomerToken, type DebugRequestParamsDTO, type DebugToolbarDataDTO, type DynamicPlacementDTO, type Effect, type Equals, type EventAttributionMetadata, type EventAttributionParams, type EventFields, type EventMapping, type EventRequestMessageV1, type EventResponseMessage, type Events, type Expect, type Experiment, type Extends, type FacebookData, type FilterOperator, type FilterRule, type ForcedTestDTO, type GoogleAnalyticsData, type InsertMode, type Maybe, type Method, type NostoSku, type NostoVariant, type OnsiteFeature, type OrderCustomer, type OrderInfo, type OverlapCampaignDTO, type Overlay, type PageType, type PlacementDebugDTO, type PlacementRuleDTO, type Popup, type PopupCampaignPreviewSettingsDTO, type PopupCouponGiven, type PopupEmailCollected, type PopupEvent, type PopupTriggerSettingsDTO, type PopupTriggered, type Popupopened, type Postrender, type Prerender, type ProductPushResponse, type PushedCustomer, type PushedProduct, type PushedProductSKU, type PushedVariation, type RecommendationDebugDTO, type RecommendationId, type RenderMode, type ScheduleTime, type Scripterror, type SearchClick, type SearchEvent, type SearchEventMetadata, type SearchImpression, type SegmentDebugDTO, type SegmentInfoBean, type SegmentRuleDebugDTO, type Segments, type SegmentsResponseBean, type Setexperiments, type Settings, type Sku, type StacklaTrackingData, type StacklaWidgetDebugDTO, type StacklaWidgetEmbedId, type StacklaWidgetFilterType, type Tagging, type TargetType, type TestDebugDTO, type TestId, type TestPlacementRuleDTO, type TestPreviewsDTO, type UnsavedDraftPreviewSettingsDTO, type ValidationError, type VariationWithRulesDTO, type VisitDTO, type WebsiteOrder, type Widen, type WidgetPlacement, type WidgetPlacementRule, type WrapMode, isPageType, maybe, type nostojs, pageTypeAliases };
