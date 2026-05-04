// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Whop from '@whop/sdk';

const client = new Whop({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ads', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ads.create({ ad_group_id: 'ad_group_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.ads.create({
      ad_group_id: 'ad_group_id',
      creative_set_id: 'creative_set_id',
      existing_instagram_media_id: 'existing_instagram_media_id',
      existing_post_id: 'existing_post_id',
      platform_config: {
        meta: {
          call_to_action_type: 'LEARN_MORE',
          carousel_cards: [
            {
              call_to_action_type: 'call_to_action_type',
              description: 'description',
              link: 'link',
              name: 'name',
            },
          ],
          description: 'description',
          descriptions: ['string'],
          existing_instagram_media_id: 'existing_instagram_media_id',
          existing_post_id: 'existing_post_id',
          headline: 'headline',
          headlines: ['string'],
          instagram_actor_id: 'instagram_actor_id',
          lead_form_config: { foo: 'bar' },
          link_url: 'link_url',
          multi_advertiser_enrollment: 'OPT_IN',
          name: 'name',
          page_id: 'page_id',
          page_welcome_message: { foo: 'bar' },
          primary_text: 'primary_text',
          primary_texts: ['string'],
          url_tags: 'url_tags',
        },
        tiktok: {
          access_pass_tag: 'access_pass_tag',
          ad_format: 'SINGLE_IMAGE',
          ad_name: 'ad_name',
          ad_text: 'ad_text',
          ad_texts: ['string'],
          aigc_disclosure_type: 'UNSET',
          auto_disclaimer_types: ['string'],
          automate_creative_enabled: true,
          brand_safety_postbid_partner: 'UNSET',
          brand_safety_vast_url: 'brand_safety_vast_url',
          call_to_action: 'LEARN_MORE',
          call_to_action_enabled: true,
          call_to_action_id: 'call_to_action_id',
          call_to_action_mode: 'STANDARD',
          card_id: 'card_id',
          carousel_image_index: 42,
          catalog_id: 'catalog_id',
          click_tracking_url: 'click_tracking_url',
          cpp_url: 'cpp_url',
          creative_authorized: true,
          creative_auto_enhancement_strategy_list: ['string'],
          dark_post_status: 'ON',
          deeplink: 'deeplink',
          deeplink_format_type: 'UNSET',
          deeplink_type: 'deeplink_type',
          deeplink_utm_params: [{ foo: 'bar' }],
          disclaimer_clickable_texts: [{ foo: 'bar' }],
          disclaimer_text: 'disclaimer_text',
          disclaimer_type: 'NONE',
          dynamic_destination: 'dynamic_destination',
          dynamic_format: 'dynamic_format',
          end_card_cta: 'end_card_cta',
          fallback_type: 'UNSET',
          identity_authorized_bc_id: 'identity_authorized_bc_id',
          identity_id: 'identity_id',
          identity_type: 'CUSTOMIZED_USER',
          image_ids: ['string'],
          impression_tracking_url: 'impression_tracking_url',
          item_duet_status: 'ENABLE',
          item_group_ids: ['string'],
          item_stitch_status: 'ENABLE',
          landing_page_url: 'landing_page_url',
          link_url: 'link_url',
          music_id: 'music_id',
          page_id: 'page_id',
          product_display_field_list: ['string'],
          product_set_id: 'product_set_id',
          product_specific_type: 'product_specific_type',
          promotional_music_disabled: true,
          shopping_ads_fallback_type: 'UNSET',
          shopping_ads_video_package_id: 'shopping_ads_video_package_id',
          showcase_products: [{ foo: 'bar' }],
          sku_ids: ['string'],
          tiktok_item_id: 'tiktok_item_id',
          tracking_app_id: 'tracking_app_id',
          tracking_message_event_set_id: 'tracking_message_event_set_id',
          tracking_offline_event_set_ids: ['string'],
          tracking_pixel_id: 'trpx_xxxxxxxxxxxxx',
          utm_params: [{ foo: 'bar' }],
          vertical_video_strategy: 'vertical_video_strategy',
          video_id: 'video_id',
          video_view_tracking_url: 'video_view_tracking_url',
          viewability_postbid_partner: 'UNSET',
          viewability_vast_url: 'viewability_vast_url',
        },
      },
      status: 'active',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.ads.retrieve('xad_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.ads.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ads.list(
        {
          ad_group_id: 'ad_group_id',
          after: 'after',
          before: 'before',
          campaign_id: 'campaign_id',
          company_id: 'biz_xxxxxxxxxxxxxx',
          created_after: '2023-12-01T05:00:00.401Z',
          created_before: '2023-12-01T05:00:00.401Z',
          first: 42,
          last: 42,
          status: 'active',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Whop.NotFoundError);
  });
});
