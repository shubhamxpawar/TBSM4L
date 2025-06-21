import supabase from "../config/SupabaseClient";

export async function getSongsByAlbum(albumName) {
  const { data, error } = await supabase
    .from("albums")
    .select("index, title, artists, duration")
    .eq("album", albumName)
    .order("index", { ascending: true });

  if (error) {
    console.error("Error fetching songs:", error.message);
    return [];
  }

  const songsWithUrl = [];

  for (const song of data) {
    const fileName = `Seedhe Maut - ${song.title}.mp3`;

    const { data: urlData, error: urlError } = await supabase.storage
      .from("albums")
      .createSignedUrl(`${albumName}/${fileName}`, 60 * 60);

    // console.log(`🔍 Trying file: ${fileName}`);
    // console.log("📦 Raw Supabase response:", urlData);
    console.log("⚠️ Error (if any):", urlError);
    console.log(`🚀 Full file path to check: ${albumName}/${fileName}`);

    if (urlError || !urlData?.signedUrl) {
      console.warn(`❌ Could not generate signed URL for: ${song.title}`);
      continue;
    }

    songsWithUrl.push({
      ...song,
      url: urlData.signedUrl,
    });
  }

  return songsWithUrl;
}
