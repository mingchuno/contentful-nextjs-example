import 'dotenv/config'
import { strict as assert } from "assert"
import contentfulManagement from "contentful-management"
import { EnvironmentGetter } from "contentful-typescript-codegen"

const { CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

// @ts-expect-error FIXME later
const getContentfulEnvironment: EnvironmentGetter = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
}

export default getContentfulEnvironment