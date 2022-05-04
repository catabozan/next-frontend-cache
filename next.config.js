/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        domains: ['welhome.ro', 'staging.api.welhome.ro']
    },
    headers: async () => ([
        {
            source: '/_next/image',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public,max-age:31536000'
                }
            ]
        }
    ])
}

module.exports = nextConfig