/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: ['welhome.ro', 'staging.api.welhome.ro', 'driven-whatsapp-api-media.s3.eu-central-1.amazonaws.com']
    },
    headers: async () => ([
        {
            source: '/_next/image',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public,max-age:2592000'
                }
            ]
        }
    ])
}

module.exports = nextConfig