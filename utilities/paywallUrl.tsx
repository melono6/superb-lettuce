export default function (
  tag_list: string[] | undefined,
  full_slug: string | undefined
) {
  return tag_list?.includes("member") ? `member/${full_slug}` : full_slug;
}
