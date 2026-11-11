<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
return new class extends Migration {
    public function up(): void {
        Schema::create('donation_interests', function (Blueprint $table) {
            $table->id();
            $table->string('reference', 32)->unique();
            $table->string('name', 160);
            $table->string('email', 190)->index();
            $table->string('country', 120)->nullable();
            $table->decimal('amount', 12, 2);
            $table->char('currency', 3)->default('USD');
            $table->text('message')->nullable();
            $table->string('status', 24)->default('new')->index();
            $table->text('internal_notes')->nullable();
            $table->timestamp('consent_at');
            $table->timestamps();
        });
        Schema::create('donation_interest_replies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('donation_interest_id')->constrained('donation_interests')->cascadeOnDelete();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('to_email', 190);
            $table->string('subject', 180);
            $table->text('body');
            $table->string('delivery_status', 24)->default('failed');
            $table->text('failure_reason')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('donation_interest_replies');
        Schema::dropIfExists('donation_interests');
    }
};
