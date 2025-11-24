import { supabase } from "../services/supabaseClient.js";

export async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "Token não fornecido" });

    const token = header.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token mal formatado" });

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data?.user)
      return res.status(401).json({ error: "Token inválido" });

    req.user = data.user;
    next();
  } catch (err) {
    next(err);
  }
}