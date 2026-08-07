import { supabaseClient } from "../../../supabase/createClient";
import { getLoungeOccupancy } from "./loungeServices";

/* FROM CLAUDE: */


/* 

Step 1 — Decide the exact query shape. getLoungeOccupancy() will call something like supabaseClient.from('lounge_current_occupancy').select('*').single(). The .single() matters: it tells Supabase "I expect exactly one row back," which fits your stated scope (one zone, one row) — but it's worth knowing now that this specific choice will need revisiting once a second zone exists, since .single() throws an error if more than one row comes back.

Step 2 — The mock is harder than your login one, for a specific reason. Your authServices.test.ts mock only needed to fake one flat function: supabaseClient.auth.signInWithPassword. This one needs to fake a chain: .from(...) returns something with .select(...), which returns something with .single(...). If you build that chain naively (each link returning a brand-new object each time it's called), the mock you configure in your test body (mockResolvedValue(...)) can end up on a different object than the one your actual code calls during the test — so your assertion silently never takes effect. The fix is to define each link as its own named, stable jest.fn() that the chain always returns the same reference to, rather than constructing fresh objects inline.

There's also a second gotcha waiting here, one you've actually already been bitten by before: jest.resetAllMocks() in beforeEach doesn't just clear call history — it wipes out any mockReturnValue/mockResolvedValue you've set, including the chain-linking itself if it was set up that way. So the chain's structure needs to be re-established (or built in a way that survives resets), not just its data.

Given how fiddly this specific part is — pure mechanics, not something you're meant to reason your way to — just ask me for the mock setup code directly when you get here rather than fighting it blind. The three actual tests below follow patterns you already know.

Step 3 — Test 1: calls Supabase correctly. Call getLoungeOccupancy(), then assert supabaseClient.from was called with 'lounge_current_occupancy', and that .select was called with '*' (or whatever you decide to select).

Step 4 — Test 2: returns data on success. Set the mocked .single() to resolve with something shaped like your real row ({ data: { zone_id, name, current_occupancy, calculated_at }, error: null }), call getLoungeOccupancy(), assert the returned value equals that data.

Step 5 — Test 3: throws on Supabase error. Same contract as login() — mock .single() resolving with { data: null, error: someError }, assert getLoungeOccupancy() throws that error directly (not wrapped), matching the pattern you already established there.

Step 6 — Add beforeEach(() => jest.resetAllMocks()) at the top, same as authServices.test.ts — but per the note in Step 2, make sure whatever you use to re-establish the mock chain either lives outside the reset's reach or gets rebuilt each test.

Start with Step 1 — decide on .single() or not — then try Step 3 (the "calls Supabase correctly" test) yourself. Shout when you want the mock setup code.   



*/