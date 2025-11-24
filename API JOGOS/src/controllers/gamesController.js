import { supabase } from "../services/supabaseClient.js";

export async function listGames(req, res, next) {
  try {
    const { data, error } = await supabase
      .from("games_played")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return next(error);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getGame(req, res, next) {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("games_played")
      .select("*")
      .eq("id", id)
      .single();

    if (error) return res.status(404).json({ error: "Jogo não encontrado" });

    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function createGame(req, res, next) {
  try {
    const { title, platform, hours_played, status } = req.body;

    const { data, error } = await supabase
      .from("games_played")
      .insert([
        {
          title,
          platform,
          hours_played,
          status,
          owner_id: req.user.id
        }
      ])
      .select()
      .single();

    if (error) return next(error);

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
}

export async function updateGame(req, res, next) {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, updated_at: new Date().toISOString() };

    const { data, error } = await supabase
      .from("games_played")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) return next(error);

    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function deleteGame(req, res, next) {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("games_played")
      .delete()
      .eq("id", id);

    if (error) return next(error);

    res.status(204).end();
  } catch (err) {
    next(err);
  }
}
