<?php
namespace App\Http\Middleware;
use App\Models\AdminApiToken; use Closure; use Illuminate\Http\Request; use Symfony\Component\HttpFoundation\Response;
class AdminTokenAuth { public function handle(Request $request, Closure $next): Response { $plain=substr((string)$request->bearerToken(),0,200); abort_unless($plain !== '',401,'Sign in required.'); $token=AdminApiToken::where('token_hash',hash('sha256',$plain))->where('expires_at','>',now())->first(); abort_unless($token,401,'Sign in required.'); $user=\App\Models\User::find($token->user_id);abort_unless($user&&$user->is_admin&&$user->is_active,401,'Sign in required.');$token->update(['last_used_at'=>now()]);$request->attributes->set('admin_token',$token);$request->setUserResolver(fn()=>$user);return $next($request); } }
