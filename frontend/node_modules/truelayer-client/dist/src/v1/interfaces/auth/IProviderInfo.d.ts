import { Scope } from './IJWT';
/**
 * Description of a data provider.
 * Docs: https://docs.truelayer.com/#list-of-supported-providers
 *
 * @interface IProviderInfo
 */
export interface IProviderInfo {
    /** Unique TrueLayer provider ID **/
    provider_id: string;
    /** Human friendly provider name */
    display_name: string;
    /** URL to the providers logo as used by TrueLayer */
    logo_url: string;
    /** List of Permissions supported by the provider */
    scopes: Scope[];
}
